import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline"; 

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline], 
    content: `
      <h2>Welcome to your beautiful editor!</h2>
      <p>This is a <strong>rich text</strong> experience with:</p>
      <ul>
        <li>Real-time collaboration</li>
        <li>Beautiful styling</li>
        <li>Tailwind CSS magic</li>
      </ul>
    `,
  });

  return (
    <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200">
        {/* Bold Button */}
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg ${editor?.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M7 12h10M5 18h14" />
          </svg>
        </button>

        {/* Italic Button */}
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg ${editor?.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 5h10M5 19h10" />
          </svg>
        </button>

        {/* Underline Button */}
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded-lg ${editor?.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      {/* Editor content */}
      <div className="p-4 min-h-[200px] prose prose-blue max-w-none">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
