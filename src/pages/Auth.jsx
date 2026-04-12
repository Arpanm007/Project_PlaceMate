import { useState } from "react";
import AuthForm from "../components/AuthForm";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-colors duration-500">

      {/* Card */}
      <div className="w-full max-w-md bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-colors duration-500">

        {/* Title */}
        <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-2">
          PlaceMate
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          AI-powered placement preparation
        </p>

        {/* Toggle Login/Register */}
        <div className="flex mb-6 bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden transition-colors duration-500">
          
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 font-semibold transition duration-300 ${
              isLogin
                ? "bg-white text-black"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold transition duration-300 ${
              !isLogin
                ? "bg-white text-black"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Register
          </button>

        </div>

        {/* Form */}
        <AuthForm isLogin={isLogin} />

      </div>
    </div>
  );
}

export default Auth;