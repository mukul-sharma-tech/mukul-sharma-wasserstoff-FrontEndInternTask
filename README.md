## 📗 Task 2: 📝 Real-Time Collaborative Editor & Component Library SDK

This repository contains two tasks:

1. **Real-Time Collaborative Editor** – A live text editor where multiple users can collaborate in real time.
2. **Component Library SDK** – A reusable, minimal UI component library built from scratch using TypeScript and TailwindCSS.

---

## 🚀 Tech Stack

- **ReactJS / Next.js**
- **TypeScript**
- **TailwindCSS**
- **Yjs / BroadcastChannel API**
- **TipTap / Quill / contenteditable**
- **No backend required**

---

## 📘 Task 1: Real-Time Collaborative Editor

### ✅ Features

- Real-time collaboration between multiple users across tabs/windows
- Live sync with **instant content updates**
- **User identification** via prompt or login
- Tracks **who is editing what** using color-coded cursors or indicators
- Works locally or with in-browser APIs like `BroadcastChannel` or `WebRTC`

### 🛠️ Installation & Running

```bash
# Clone the repository
git clone https://github.com/your-username/realtime-editor-sdk.git
cd realtime-editor-sdk

# Install dependencies
npm install

# Run the app
npm run dev
```





## 📗 Task 2: Component Library SDK

### ✅ Features

- Fully reusable and self-contained components
- Built from scratch without external UI libraries
- Typesafe and strongly typed with **TypeScript**
- Clean structure with DRY principles
- No inline styles – all styling via TailwindCSS utility classes
- Each component limited to **max 200 lines**

### ✨ Included Components (examples)

- `Button`
- `Input`
- `Card`
- `Avatar`
- `Modal`
- `UserBadge`

Each component is placed in the `/components` or `/lib` folder and can be imported easily across the app.

### 📄 Demo Pages

You can find demos for the components inside the `/pages` or `/demos` folder:

- `/pages/buttons.tsx`
- `/pages/form.tsx`
- `/pages/profile.tsx`

Each page demonstrates usage of one or more components from the library.

---

### 🛠️ Installation & Running (same as Task 1)

```bash
# Clone the repository
git clone https://github.com/your-username/realtime-editor-sdk.git
cd realtime-editor-sdk

# Install dependencies
npm install

# Run the app
npm run dev
```
