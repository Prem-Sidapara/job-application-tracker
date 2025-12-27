# Job Application Tracker + Resume Analyzer (Backend)

A backend application that allows users to securely manage job applications and upload resumes for skill extraction using JWT-based authentication.

This project focuses on real-world backend development practices including authentication, authorization, file handling, database design, and debugging.

---

## 🚀 Features

- User registration and login with JWT authentication
- Secure password hashing using bcrypt
- CRUD operations for job applications
- Job status pipeline (Applied, Interview, Offer, Rejected)
- Resume upload (PDF)
- Resume text parsing and skill extraction
- JWT-protected routes
- Clean backend architecture (routes, controllers, models, middleware)

---

## 🧱 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT, bcrypt
- File Upload: Multer
- Resume Parsing: PDF text extraction
- Tools: Git, GitHub, Postman

---

## 📂 Project Structure

# Job Application Tracker + Resume Analyzer (Backend)

A backend application that allows users to securely manage job applications and upload resumes for skill extraction using JWT-based authentication.

This project focuses on real-world backend development practices including authentication, authorization, file handling, database design, and debugging.

---

## 🚀 Features

- User registration and login with JWT authentication
- Secure password hashing using bcrypt
- CRUD operations for job applications
- Job status pipeline (Applied, Interview, Offer, Rejected)
- Resume upload (PDF)
- Resume text parsing and skill extraction
- JWT-protected routes
- Clean backend architecture (routes, controllers, models, middleware)

---

## 🧱 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Authentication: JWT, bcrypt
- File Upload: Multer
- Resume Parsing: PDF text extraction
- Tools: Git, GitHub, Postman

---

## 📂 Project Structure


---

## 🔐 Authentication Flow

1. User registers or logs in using email and password
2. Server validates credentials
3. JWT token is generated with userId
4. Token is sent in request headers for protected routes: Authorization: Bearer <token>
5. Middleware verifies the token and attaches userId to the request

---

## 📄 API Endpoints

### Auth
- POST /auth/register → Register user
- POST /auth/login → Login user and receive JWT

### Jobs (Protected)
- POST /jobs → Create job application
- GET /jobs → Fetch job applications
- PUT /jobs/:id → Update job application
- DELETE /jobs/:id → Delete job application

### Resume (Protected)
- POST /resume/upload → Upload resume PDF and extract skills
- GET /resume → Fetch parsed resume data

---

## 🧠 Resume Analyzer Logic

- Accepts PDF resumes
- Converts PDF to text
- Matches predefined skill keywords
- Stores extracted skills in database

Note: Only text-based PDFs are supported. OCR is not implemented.

---

## ⚙️ Setup & Run Locally

1. Clone the repository
```bash
git clone https://github.com/Prem-Sidapara/job-application-tracker.git
2. Install dependencies
cd backend
npm install
3. Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. node server.js
node server.js
5. node server.js
http://localhost:5000

🧪 Testing

All APIs were tested using Postman.

📌 Purpose

This project was built to demonstrate:

Backend system design

Secure authentication and authorization

RESTful API development

File upload handling

Real-world debugging and problem solving

👤 Author

Prem Sidapara
GitHub: https://github.com/Prem-Sidapara

LinkedIn: https://www.linkedin.com/in/prem-sidapara/


---

