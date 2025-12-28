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
      <div className="p-6 bg-gray-50 min-h-screen">
        <form onSubmit={addJob} className="mb-6 flex flex-col md:flex-row gap-3 bg-white p-4 rounded-lg shadow-sm">
          <input
            placeholder="Company"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <input
            placeholder="Role"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">Add</button>
        </form>

        {jobs.map((job) => (
          <div
  key={job._id}
  className="bg-white border border-gray-200 p-4 mb-4 flex justify-between items-center rounded-lg shadow-sm hover:shadow-md transition"
>
  <div>
    <p className="font-semibold text-lg text-gray-900">{job.company}</p>
    <p className="text-gray-600">{job.role}</p>

    <select
      value={job.status}
      onChange={async (e) => {
        await api.patch(`/jobs/${job._id}`, {
          status: e.target.value,
        });
        fetchJobs();
      }}
      className="border border-gray-300 rounded-md mt-3 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
  </div>

  <button
    onClick={() => deleteJob(job._id)}
    className="text-red-600 hover:text-red-700 font-medium"
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
