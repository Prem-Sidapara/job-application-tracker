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
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Resume Analyzer</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-3"
          />
          <button className="bg-black text-white px-4 py-2">
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </form>

        {result && (
          <div className="border p-4 rounded">
            <p><b>Matched Skills:</b> {result.matchedSkills?.join(", ")}</p>
            <p><b>Missing Skills:</b> {result.missingSkills?.join(", ")}</p>
            <p><b>Match Score:</b> {result.score}%</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ResumeAnalyzer;
