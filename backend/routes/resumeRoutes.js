const express = require("express");
const router = express.Router();
const multer = require("multer");

const protect = require("../middleware/authMiddleware");
const {
  uploadResume,
  getResume,
} = require("../controllers/resumeController");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", protect, upload.single("resume"), uploadResume);
router.get("/", protect, getResume);

module.exports = router;
