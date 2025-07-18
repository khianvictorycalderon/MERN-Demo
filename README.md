# MERN Demo

This is my first project using MERN stack which are:
- MongoDB
- Express JS
- React
- NodeJS

Other libraries used:
- Nodes Type
- UI Shadcn

To run the frontend project:
1. `cd frontend`
2. `npm install` (If you haven't have node_modules folder yet)
3. `npm run dev` - This starts the webpage

To run the backend:
1. `cd backend`
2. `npm install` (If you haven't have node_modules folder yet)
3. `npm run server` - This starts the server

## Dependencies installed
*You don't have to install these dependencies as it is handled by npm install, below are just list of dependecies I used*

### Frontend
- **React (Vite)** – `npm create vite@latest`
- **Tailwind CSS (Vite)** – `npm install tailwindcss @tailwindcss/vite`
- **Axios** – `npm install axios`
- **Types Nodes** – `npm install -D @types/node`
- **UI Shadcn** – `npm install -D @types/node`
  - **Input** – `npx shadcn@latest add input`
  - **Label** – `npx shadcn@latest add label`
  - **Button** – `npx shadcn@latest add button`
  - **Alert** – `npx shadcn@latest add alert`

### Backend
- **Express.js** – `npm install express`
- **Cors** – `npm install express cors`
- **Nodemon** – `npm install nodemon --save-dev`
- **Mongoose** – `npm install mongoose`

## Configuration dependencies
*You also don't have to configure these as it is already handled by the package.json, these are just the configurations I did when first creating the project*

- Updated `frontend/vite.config.ts` configuration:
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Added this line

export default defineConfig({
  plugins: [
    tailwindcss(), // Added this line
  ],
})
```

- Updated `frontend/tsconfig.json` configuration:
```
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

- Updated `frontend/vite.config.ts` configuration:
```
plugin: [],
resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
```

- Updated `backend/package.json` configuration:
```
"scripts": {
  "server": "nodemon index.js"
},
```