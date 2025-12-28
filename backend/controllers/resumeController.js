// const Resume = require("../models/Resume");
// const pdfParse = require("pdf-parse");




// const SKILLS = [
//   "javascript",
//   "react",
//   "node",
//   "express",
//   "mongodb",
//   "sql",
//   "html",
//   "css",
// ];

// const uploadResume = async (req, res) => {
//   try {
//     // console.log("FILE:", req.file);

//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const dataBuffer = req.file.buffer;
//     // console.log("BUFFER LENGTH:", dataBuffer.length);

//     const pdfData = await pdfParse(dataBuffer);
//     // console.log("PDF TEXT LENGTH:", pdfData.text.length);

//     const text = pdfData.text.toLowerCase();

//     const extractedSkills = SKILLS.filter(skill =>
//       text.includes(skill)
//     );

//     const resume = await Resume.create({
//       userId: req.user,
//       originalFileName: req.file.originalname,
//       extractedText: text,
//       extractedSkills,
//     });

//     res.status(201).json({
//       message: "Resume uploaded and parsed successfully",
//       skills: resume.extractedSkills,
//     });
//   } catch (error) {
//     console.error("PDF PARSE ERROR:", error);
//     res.status(500).json({ error: "Failed to process resume" });
//   }
// };

// const getResume = async (req, res) => {
//   try {
//     const resume = await Resume.findOne({ userId: req.user });

//     if (!resume) {
//       return res.status(404).json({ error: "Resume not found" });
//     }

//     res.json({
//       skills: resume.extractedSkills,
//       uploadedAt: resume.createdAt,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch resume" });
//   }
// };

// module.exports = {
//   uploadResume,
//   getResume,
// };

const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume uploaded" });
    }

    // TEMP RESPONSE (we'll improve later)
    res.json({
      matchedSkills: ["JavaScript", "React"],
      missingSkills: ["Node.js"],
      score: 70,
    });
  } catch (err) {
    console.error("Resume error:", err);
    res.status(500).json({ error: "Resume analysis failed" });
  }
};

module.exports = analyzeResume;
