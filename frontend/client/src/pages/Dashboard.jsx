import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const countByStatus = (status) =>
    jobs.filter((job) => job.status === status).length;

  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-2 md:grid-cols-2 gap-6 bg-gray-400">
        <Stat title="Applied" count={countByStatus("Applied")} />
        <Stat title="Interview" count={countByStatus("Interview")} />
        <Stat title="Offer" count={countByStatus("Offer")} />
        <Stat title="Rejected" count={countByStatus("Rejected")} />
      </div>
    </>
  );
};

const Stat = ({ title, count }) => (
  <div className="bg-white border border-gray-200 p-6 text-center rounded-lg shadow-sm hover:shadow-md transition">
    <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{title}</p>
    <p className="text-3xl font-semibold text-gray-900">{count}</p>
  </div>
);

export default Dashboard;
