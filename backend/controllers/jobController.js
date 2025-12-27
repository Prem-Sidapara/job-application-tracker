const Job = require('../models/Job');

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}


const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
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
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    createJob, getJobs, updateJob, deleteJob
}