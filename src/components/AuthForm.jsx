import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm({ isLogin }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 SAVE USER (TEMP)
    localStorage.setItem("user", JSON.stringify(formData));

    /* 🔁 FIREBASE VERSION (REPLACE LATER)
    await signInWithEmailAndPassword(...)
    */

    if (!isLogin) {
      navigate("/resume");
      return;
    }

    if (formData.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Register only */}
      {!isLogin && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="p-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-300"
          required
        />
      )}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="p-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-300"
        required
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="p-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-300"
        required
      />

      {/* 🔥 Role ONLY in Login */}
      {isLogin && (
        <>
          <select
            name="role"
            onChange={handleChange}
            className="p-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-300"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          {/* 🔁 OPTIONAL INFO */}
          {/* <p className="text-xs text-gray-400 text-center">
            Admin access is restricted
          </p> */}
        </>
      )}

      {/* Button */}
      <button
        type="submit"
        className="bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg font-semibold hover:opacity-80 transition duration-200"
      >
        {isLogin ? "Login" : "Register"}
      </button>

    </form>
  );
}

export default AuthForm;