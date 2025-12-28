const express = require("express");
const router = express.Router();

const {
  getJobs,
  createJob,
  updateJob,
  deleteJob
} = require("../controllers/jobController");

const requireAuth = require("../middleware/requireAuth");


router.use(requireAuth);

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
