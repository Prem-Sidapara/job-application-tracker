import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    }  catch (err) {
        console.log("REGISTER ERROR FULL:", err);
        console.log("REGISTER ERROR DATA:", err.response?.data);
        alert(
          err.response?.data?.message ||
          err.response?.data?.error ||
          "Registration failed (no message)"
        );
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-80 bg-white p-6 rounded-lg shadow-md border border-gray-200" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />


        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-medium">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
