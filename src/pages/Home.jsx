import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Crack Placements with AI Guidance
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-6">
          Personalized preparation system that analyzes your strengths,
          identifies weak areas, and adapts your learning daily.
        </p>

        <button
          onClick={() => navigate("/auth")}
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition duration-200"
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Home;