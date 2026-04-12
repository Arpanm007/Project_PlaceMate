import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { auth, googleProvider } from '../firebase'; // Path to your firebase.js
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // 1. Trigger the Google Popup
      const result = await signInWithPopup(auth, googleProvider);
      
      // 2. If successful, Firebase returns a user object
      console.log("Logged in as:", result.user.displayName);
      
      // 3. NOW you redirect to the dashboard
      navigate('/dashboard');
      
    } catch (error) {
      // If they close the popup or it fails, handle it here
      console.error("Login Error:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

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
            className={`w-1/2 py-2 font-semibold transition duration-300 ${isLogin
                ? "bg-white text-black"
                : "text-gray-600 dark:text-gray-300"
              }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 font-semibold transition duration-300 ${!isLogin
                ? "bg-white text-black"
                : "text-gray-600 dark:text-gray-300"
              }`}
          >
            Register
          </button>

        </div>

        {/* Form */}
        <AuthForm isLogin={isLogin} />

        {/* Sign in with Google */}
        <div className="mt-6">
          <button onClick={handleGoogleSignIn} className="w-full py-2 px-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </div>

      </div>
    </div>
  );
}

export default Auth;