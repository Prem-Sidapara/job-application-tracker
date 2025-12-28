const Job = require("../models/Job");


const createJob = async (req, res) => {
  try {
    const { company, role, status } = req.body;

    const job = await Job.create({
      company,
      role,
      status,
      user: req.user._id, 
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user._id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id }, 
      req.body,
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id, 
    });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
};
