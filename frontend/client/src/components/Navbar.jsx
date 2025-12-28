import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md sticky top-0 z-50"
>
      <h1
        className="font-semibold text-lg tracking-wide cursor-pointer hover:text-gray-300 transition"
        onClick={() => navigate("/dashboard")}
      >
        Job Tracker
      </h1>

      <div className="flex gap-2">
        <button
          onClick={() => navigate("/jobs")}
          className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"

        >
          Jobs
        </button>

        <button
          onClick={() => navigate("/resume-analyzer")}
          className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-sm"

        >
          Resume Analyzer
        </button>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition text-sm font-medium"

        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
