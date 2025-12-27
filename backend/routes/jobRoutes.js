const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createJob, getJobs, updateJob, deleteJob } = require("../controllers/jobController");

router.use(protect);

router.post('/', createJob);
router.get('/', getJobs);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
