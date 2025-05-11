# Collaborative Editor
A beautiful, real-time collaborative text editor built with React, TypeScript, and Yjs. Experience seamless collaboration with multiple cursors, rich text formatting, and live presence indicators.

## Features

✨ **Real-time Collaboration**  
- Multiple users can edit simultaneously
- Live cursor positions and selections
- Presence indicators showing online users

🎨 **Rich Text Editing**  
- Bold, italic, underline formatting
- Headings and lists
- Clean, modern interface with dark mode

⚡ **Instant Syncing**  
- WebRTC for peer-to-peer connectivity
- Conflict-free data types (CRDT) with Yjs
- Automatic version history

🔒 **Secure & Private**  
- End-to-end encrypted communication
- No central server storing your data
- Peer connections established directly between collaborators

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Editor**: Tiptap (ProseMirror-based)
- **Collaboration**: Yjs + WebRTC
- **Bundler**: Vite
- **State Management**: React Hooks

## Project Structure

```
├Project
├── node_modules/
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── CollaborativeEditor/ # Main editor implementation
│ │ ├── Editor.tsx # Standalone editor component
│ │ └── App.tsx # Main application component
│ ├── lib/ # Shared utilities
│ ├── styles/ # Global styles
│ ├── main.tsx # Application entry point
│ └── vite-env.d.ts # TypeScript declarations
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```
## Components

The library includes these core components:

| Component | Description |
|-----------|-------------|
| `Button` | Customizable button with variants |
| `TextField` | Input field with validation |
| `UploadField` | File upload with drag-and-drop |
| `Card` | Container with multiple styles |
| `Typography` | Consistent text styling |
| `Avatar` | User avatar with fallback |
| `Ticket` | Conference ticket display |
| `Layout` | Page layout system |

## Usage

Here's how to use the components in your project:

```jsx
import { 
  Button, 
  TextField, 
  Card, 
  Typography 
} from './lib/components';

function MyForm() {
  const [name, setName] = useState('');

  return (
    <Card variant="default">
      <Typography variant="h2" color="#ffffff">
        Register Now
      </Typography>
      
      <TextField
        id="name"
        label="Your Name"
        value={name}
        onChange={setName}
        required
      />
      
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```


## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+ or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mukul-sharma-tech/mukul-sharma-wasserstoff-FrontEndInternTask
cd Real-TimeCollaborativeEditor
```

## Running the Demo

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the local server URL

## Collaboration Features

The component library supports real-time collaboration:

- Change tracking for all form fields
- User attribution for each change
- History of all modifications with timestamps

This allows for identifying which user made which change.

## Troubleshooting
Issue	Solution
- Peers not connecting	Check firewall/WebRTC permissions
- Formatting not working	Verify schema includes required marks
- Sync delays	Check network conditions
