const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const resumeRoutes = require("./routes/resumeRoutes");


const app = express();

/* ========= CORS (DEV SAFE MODE) ========= */
// app.use(cors()); // 🔥 THIS IS THE KEY
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

/* ========= ROUTES ========= */
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/resume", resumeRoutes);

/* ========= HEALTH ========= */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.get("/", (req, res) => {
  res.json({
    status: "Backend is running",
    api: "/api",
    message: "you can use frontend now",
  });
});

/* ========= DB ========= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

/* ========= SERVER ========= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
