import { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a resume");

    const formData = new FormData();
    formData.append("resume", file);

    try {
            setLoading(true);
            const res = await api.post("/resume/analyze", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setResult(res.data);
        } catch (err) {
        console.log("RESUME ERROR:", err.response?.data || err.message);
        alert("Resume analysis failed");
      }
     finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Resume Analyzer</h2>

        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4 block w-full text-sm text-gray-600
           file:mr-4 file:py-2 file:px-4
           file:rounded-md file:border-0
           file:text-sm file:font-medium
           file:bg-gray-100 file:text-gray-700
           hover:file:bg-gray-200 cursor-pointer"
          />
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-60">
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {result && (
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
            <p className="mb-2 text-gray-700"><b className="text-pink-900">Matched Skills:</b> {result.matchedSkills?.join(", ")}</p>
            <p className="mb-2 text-gray-700"><b className="text-pink-900">Missing Skills:</b> {result.missingSkills?.join(", ")}</p>
            <p className="mb-2 text-gray-700"><b className="text-pink-900">Match Score:</b> {result.score}%</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ResumeAnalyzer;
