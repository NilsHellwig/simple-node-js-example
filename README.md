# Simple Node.js/Express.js Todo App

This project demonstrates a basic To-Do application with a Node.js backend and a static frontend.

## Getting Started

1. Open the folder `simple-node-js-example` in VS Code.
2. Use two separate terminals to run the frontend and the backend.

---

## Frontend Setup (Terminal 1)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Start a local web server (e.g., using `http-server`):
   ```bash
   npx http-server
   ```
   *Alternatively, you can use the "Live Server" VS Code extension.*

---

## Backend Setup (Terminal 2)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   *The server will run on [http://localhost:3334](http://localhost:3334).*

## Features

- **Frontend**: Built with HTML, CSS, and Vanilla JavaScript.
- **Backend**: Express.js server managing a JSON-based database (`db.json`).
- **Persistence**: Tasks are saved in a local file.
- **English Comments**: All code files include comments in English.
- **No User Accounts**: Functional and lightweight task management without authentication.
