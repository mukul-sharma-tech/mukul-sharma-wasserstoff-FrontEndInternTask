import React, { useEffect, useRef, useState } from 'react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { ySyncPlugin, yCursorPlugin, yUndoPlugin } from 'y-prosemirror';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { undo, redo } from 'y-prosemirror';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema } from 'prosemirror-model';
import { nodes as basicNodes, marks as basicMarks } from 'prosemirror-schema-basic';

interface User {
  name: string;
  color: string;
}

interface Props {
  username: string;
}

// Extend schema to include underline
const underlineMark = {
  underline: {
    parseDOM: [{ tag: 'u' }, { style: 'text-decoration=underline' }],
    toDOM() {
      return ['u', 0];
    },
  },
};

const customSchema = new Schema({
  nodes: basicNodes,
  marks: {
    ...basicMarks,
    ...underlineMark,
  },
});

const CollaborativeEditor: React.FC<Props> = ({ username }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorView = useRef<EditorView | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const providerRef = useRef<WebrtcProvider | null>(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebrtcProvider('realtime-collab-room', ydoc);
    providerRef.current = provider;

    const type = ydoc.getXmlFragment('prosemirror');

    provider.awareness.setLocalStateField('user', {
      name: username,
      color: '#818cf8', // indigo-400
    });

    const updateUsers = () => {
      const states = Array.from(provider.awareness.getStates().values());
      const onlineUsers = states.map(state => state.user).filter(Boolean) as User[];
      setUsers(onlineUsers);
    };

    provider.awareness.on('change', updateUsers);
    updateUsers();

    const state = EditorState.create({
      schema: customSchema,
      plugins: [
        ySyncPlugin(type),
        yCursorPlugin(provider.awareness),
        yUndoPlugin(),
        keymap({
          'Mod-z': undo,
          'Mod-y': redo,
          'Mod-Shift-z': redo,
        }),
        keymap(baseKeymap),
      ],
    });

    const view = new EditorView(editorRef.current!, {
      state,
    });

    editorView.current = view;

    return () => {
      view.destroy();
      provider.destroy();
      ydoc.destroy();
    };
  }, [username]);

  const toggleMark = (markTypeName: string) => {
    const view = editorView.current;
    if (!view) return;

    const { state, dispatch } = view;
    const markType = state.schema.marks[markTypeName];
    if (!markType) return;

    const { from, to, empty } = state.selection;

    if (empty) {
      const hasMark = state.storedMarks?.some(mark => mark.type === markType);
      const tr = state.tr;
      if (hasMark) {
        dispatch(tr.removeStoredMark(markType));
      } else {
        dispatch(tr.addStoredMark(markType.create()));
      }
    } else {
      const hasMark = state.doc.rangeHasMark(from, to, markType);
      const tr = state.tr;
      if (hasMark) {
        tr.removeMark(from, to, markType);
      } else {
        tr.addMark(from, to, markType.create());
      }
      dispatch(tr.scrollIntoView());
    }
  };

  const toggleBold = () => toggleMark('strong');
  const toggleItalic = () => toggleMark('em');
  const toggleUnderline = () => toggleMark('underline');

  return (
    <div className="p-6">
      {/* Toolbar */}
      <div className="flex space-x-2 mb-4">
        <button onClick={toggleBold} className="px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 text-sm">
          B
        </button>
        <button onClick={toggleItalic} className="px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 text-sm italic">
          I
        </button>
        <button onClick={toggleUnderline} className="px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 text-sm underline">
          U
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="min-h-[400px] p-6 bg-slate-800 bg-opacity-30 text-white border border-slate-700 rounded-xl prose prose-invert max-w-none 
          prose-headings:text-white prose-headings:font-medium prose-p:text-white prose-strong:text-white
          prose-a:text-white hover:prose-a:text-slate-300 prose-ul:text-white prose-ol:text-white
          focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all duration-200"
      />

      {/* Users & actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
            <span className="text-sm text-slate-400">
              Editing as <span className="font-medium text-slate-200">{username}</span>
            </span>
          </div>
          {users.length > 0 && (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-slate-400">Online:</span>
              <div className="flex items-center space-x-1">
                {users.map((user, index) => (
                  <div key={index} className="flex items-center">
                    <span
                      className="w-2 h-2 rounded-full mr-1"
                      style={{ backgroundColor: user.color }}
                    ></span>
                    <span className="text-sm text-slate-300">{user.name}</span>
                    {index < users.length - 1 && (
                      <span className="text-slate-500 mx-1">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-lg transition-colors flex items-center">
            Version History
          </button>
          <button className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-lg transition-colors flex items-center">
            Invite
          </button>
        </div>
      </div>

      {/* Mobile view for online users */}
      {users.length > 0 && (
        <div className="mt-4 md:hidden">
          <div className="text-sm text-slate-400 mb-1">Online users:</div>
          <div className="flex flex-wrap gap-2">
            {users.map((user, index) => (
              <div key={index} className="flex items-center bg-slate-700 px-2 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: user.color }}></span>
                <span className="text-sm text-slate-200">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborativeEditor;
