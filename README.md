# Job Application Tracker 🚀

A full-stack web application to track job applications, manage their status, and analyze resumes using keyword matching.

Live project built with **MERN stack** and deployed using **Netlify + Render + MongoDB Atlas**.

---

## 🔗 Live Demo

- **Frontend (Netlify):** https://job-application-tracker-peky.netlify.app  
- **Backend (Render):** https://job-application-tracker-peky.onrender.com

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT-based authentication
- Protected routes (Dashboard, Jobs, Resume Analyzer)

### 📊 Job Tracking
- Add job applications
- Update job status:
  - Applied
  - Interview
  - Offer
  - Rejected
- Delete jobs
- Dashboard summary by status

### 📄 Resume Analyzer
- Upload PDF resume
- Extract skills
- Show:
  - Matched skills
  - Missing skills
  - Match score (%)

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- Netlify (deployment)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file upload)
- Render (deployment)

### Database
- MongoDB Atlas (cloud database)

---

## 📁 Project Structure

job-application-tracker/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
└── frontend/
└── client/
├── src/
├── public/
└── vite.config.js


---

## ⚙️ Environment Variables

### Backend (`Render`)


---

## ⚙️ Environment Variables

### Backend (`Render`)


> ⚠️ `.env` file is NOT used in production.  
> Variables are set directly in Render dashboard.

---

## 🧪 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Jobs (Protected)
- `GET /api/jobs`
- `POST /api/jobs`
- `PATCH /api/jobs/:id`
- `DELETE /api/jobs/:id`

### Resume Analyzer (Protected)
- `POST /api/resume/analyze`

---

## 🔒 Security Notes

- Passwords are hashed using **bcrypt**
- JWT tokens stored in `localStorage`
- MongoDB IP access configured via Atlas Network Access

---

## 🚀 Deployment Notes

- Frontend deployed on **Netlify**
- Backend deployed on **Render**
- MongoDB hosted on **MongoDB Atlas**
- SPA routing handled via Netlify `_redirects`

---

## 📌 Future Improvements

- Resume skill extraction using NLP
- Pagination & search for jobs
- Email notifications
- Role-based access
- Better resume scoring logic

---

## 👨‍💻 Author

**Prem Sidapara**  
Computer Engineering  
Full-Stack Developer (MERN)

---

## 🏁 Conclusion

This project demonstrates:
- Full-stack architecture
- Real-world authentication flow
- Cloud deployment & debugging
- Backend + database integration

Built end-to-end with production deployment.
