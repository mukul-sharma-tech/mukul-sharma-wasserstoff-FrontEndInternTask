// import React from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// const Editor = () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: `
//       <h2>Welcome to your beautiful editor!</h2>
//       <p>This is a <strong>rich text</strong> experience with:</p>
//       <ul>
//         <li>Real-time collaboration</li>
//         <li>Beautiful styling</li>
//         <li>Tailwind CSS magic</li>
//       </ul>
//     `,
//   });

//   return (
//     <div className="rounded-xl bg-white shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
//       {/* Toolbar */}
//       <div className="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200">
//         <button
//           onClick={() => editor?.chain().focus().toggleBold().run()}
//           className={`p-2 rounded-lg ${editor?.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
//           </svg>
//         </button>
//         <button
//           onClick={() => editor?.chain().focus().toggleItalic().run()}
//           className={`p-2 rounded-lg ${editor?.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//           </svg>
//         </button>
//         {/* Add more toolbar buttons as needed */}
//       </div>
      
//       {/* Editor content */}
//       <div className="p-4 min-h-[200px] prose prose-blue max-w-none">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// };

// export default Editor;


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