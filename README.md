# MERN Demo

This is my first project using MERN stack which are:
- MongoDB
- Express JS
- React
- NodeJS

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

### Backend
- **Express.js** – `npm install express`
- **Nodemon** – `npm install nodemon --save-dev`

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
- Updated `backend/package.json` configuration:

Changed this part from this:
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

to this:
```
"scripts": {
  "server": "nodemon index.js"
},
```