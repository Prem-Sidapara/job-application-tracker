import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (e) => {
    e.preventDefault();
    await api.post("/jobs", { company, role });
    setCompany("");
    setRole("");
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <form onSubmit={addJob} className="mb-4">
          <input
            placeholder="Company"
            className="border p-2 mr-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <input
            placeholder="Role"
            className="border p-2 mr-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <button className="bg-black text-white px-3 py-2">Add</button>
        </form>

        {jobs.map((job) => (
          <div
  key={job._id}
  className="border p-3 mb-2 flex justify-between items-center"
>
  <div>
    <p className="font-bold">{job.company}</p>
    <p>{job.role}</p>

    <select
      value={job.status}
      onChange={async (e) => {
        await api.patch(`/jobs/${job._id}`, {
          status: e.target.value,
        });
        fetchJobs();
      }}
      className="border mt-2 p-1"
    >
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
  </div>

  <button
    onClick={() => deleteJob(job._id)}
    className="text-red-500"
  >
    Delete
  </button>
</div>

        ))}
      </div>
    </>
  );
};

export default Jobs;
