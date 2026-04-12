import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Auth from "./pages/Auth";
import ResumeUpload from "./pages/ResumeUpload";
import CompanySelect from "./pages/CompanySelect";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  // ✅ Initialize from localStorage (NO useEffect needed)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== "light"; // default dark
  });

  // ✅ Only sync DOM + localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500">

      {/* 🌙 Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 left-4 z-50 bg-gray-800 dark:bg-white text-white dark:text-black px-3 py-2 rounded-full shadow-lg transition duration-300 hover:scale-110"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/resume" element={<ResumeUpload />} />
        <Route path="/companies" element={<CompanySelect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;