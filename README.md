# LIA-PLUS-AI Assignment1

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that supports:

-  User Registration and Login using JWT
-  Creating and Viewing Posts
-  Clean UI using React and CSS

---

## Project Structure

LIA-PLUS-AI-Assignment1/
├── backend/ # Express.js Backend
└── frontend1/ # React Frontend (renamed from frontend)

Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally (or MongoDB Atlas URI)
- Git installed

---

## How to Run the Application Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Jagadhish3/LIA-PLUS-AI-Assignment1.git
cd LIA-PLUS-AI-Assignment1


2. Setup and Run Backend
cd backend
npm install

Check MongoDB connection in server.js (default is mongodb://127.0.0.1:27017/lia-assignment).

Then start the backend server:
node server.js

Backend runs at: http://localhost:5000

3. Setup and Run Frontend
Open a new terminal:

cd frontend1
npm install
npm start

Frontend runs at: http://localhost:3000

API Endpoints
Auth Routes
POST /api/auth/register – Register user

POST /api/auth/login – Login and receive JWT token

Post Routes
GET /api/posts – Get all posts

POST /api/posts – Create a post (requires token)

Tech Stack
Frontend: React.js, HTML, CSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JSON Web Token (JWT)

