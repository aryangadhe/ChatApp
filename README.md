# 💬 Real-Time Chat App

A modern full-stack real-time chat application with user authentication, image messaging, profile management, online presence, and socket communication — built with **React**, **Node.js**, **MongoDB**, and **Socket.IO**. 

Deployed on **Vercel** (Frontend) and **Render** or **Vercel Serverless** (Backend).

---

## 🚀 Features

- 👤 User authentication (signup/login)
- 📸 Profile picture and bio updates (Cloudinary support)
- 💬 Real-time messaging with Socket.IO
- 🖼️ Send text and image messages
- 🟢 Online user detection
- 🛡️ Protected routes with JWT
- 🌐 Deployed with Vercel (Frontend)

---

## 🛠️ Tech Stack

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Socket.IO Client](https://socket.io/)
- [React Hot Toast](https://react-hot-toast.com/)

### Backend

- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Socket.IO Server](https://socket.io/)
- [Cloudinary](https://cloudinary.com/) (for image uploads)
- [JWT](https://jwt.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Project Structure

project-root/
├── client/ # React frontend
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── constest/ # Context API logic (Auth, Chat)
│ │ └── App.jsx
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── vite.config.js
├── server/ # Node.js backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── lib/ # DB, Cloudinary, utils
│ └── server.js
├── .env
├── README.md
└── package.json


---

## 📄 Environment Variables

Create a `.env` file in `server/` and `client/`:

### Server `.env`:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret 
```
Client .env:
VITE_BACKEND_URL=https://your-backend-url.com

⚙️ Installation & Development
1. Clone the repository
   git clone https://github.com/your-username/chat-app.git
  cd chat-app

2.  Install dependencies
   Client:
    cd client
    npm install
    
   Server:
     cd ../server
     npm install
     
3. Run in development
    Client:
      npm run dev
   
   Server:
      node server.js

🚀 Deployment

Frontend on Vercel
. Push the client/ folder to a GitHub repo
. Link it to Vercel
. Set VITE_BACKEND_URL in Vercel Project Settings → Environment Variables

Backend (Options)
.Host with Render, Railway, or Vercel Serverless API
.Export the server.js properly for serverless if using Vercel

📷 Preview
Login	Chat	Profile

🙏 Credits
Built with ❤️ by Aryan
