// // App.tsx
// import React, { useState } from "react";
// import CollaborativeEditor from "./pages/CollaborativeEditor";

// function App() {
//   const [username, setUsername] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [tempUsername, setTempUsername] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (tempUsername.trim()) {
//       setUsername(tempUsername);
//       setShowModal(false);
//       setTempUsername("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">
//       {/* Modal for username input */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the collaboration</h2>
//             <form onSubmit={handleLogin}>
//               <div className="mb-4">
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Name
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={tempUsername}
//                   onChange={(e) => setTempUsername(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   placeholder="Enter your username"
//                   autoFocus
//                 />
//               </div>
//               <div className="flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors shadow-md"
//                 >
//                   Join
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
//             Real-Time Collaborative Editor
//           </h1>
//           <p className="text-gray-600 mt-2">Work together seamlessly with others</p>
//         </header>

//         {!username ? (
//           <div className="flex flex-col items-center justify-center min-h-[60vh]">
//             <button
//               onClick={() => setShowModal(true)}
//               className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg hover:from-indigo-700 hover:to-blue-600"
//             >
//               Start Collaborating
//             </button>
//             <p className="mt-4 text-gray-500">Join to see real-time changes</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
//             <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="text-xl font-semibold">Welcome, {username}!</h2>
//                   <p className="text-indigo-100 opacity-90">All changes are synchronized in real-time</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
//                   <span className="text-sm">Connected</span>
//                 </div>
//               </div>
//             </div>
//             <CollaborativeEditor username={username} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// App.tsx
import React, { useState } from "react";
import CollaborativeEditor from "./pages/CollaborativeEditor";

function App() {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tempUsername, setTempUsername] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUsername.trim()) {
      setUsername(tempUsername);
      setShowModal(false);
      setTempUsername("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 font-sans">
      {/* Glassmorphism Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 bg-opacity-60 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Join the Workspace</h2>
              <p className="text-slate-400">Pick a name to start collaborating</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <div className="relative">
                  <input
                    id="username"
                    type="text"
                    value={tempUsername}
                    onChange={(e) => setTempUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 bg-opacity-50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder-slate-500"
                    placeholder="Your name"
                    autoFocus
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl transition-all font-medium shadow-lg hover:shadow-indigo-500/20"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4 leading-tight">
            Collaborative Editor
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beautiful real-time collaboration with crystal clear sync
          </p>
        </header>

        {!username ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <button
              onClick={() => setShowModal(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-white font-medium text-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Start Collaborating
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <div className="mt-8 flex items-center space-x-4 text-slate-500">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                <span className="text-sm">Real-time sync</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                <span className="text-sm">Multiple cursors</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                <span className="text-sm">Version history</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 bg-opacity-60 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-700 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">Welcome back, <span className="text-indigo-400">{username}</span></h2>
                <p className="text-slate-400 text-sm">All changes are saved automatically</p>
              </div>
              <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1.5 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-slate-300">Connected</span>
              </div>
            </div>
            <CollaborativeEditor username={username} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;