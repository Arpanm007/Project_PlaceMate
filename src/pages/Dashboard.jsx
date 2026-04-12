import PerformanceBox from "../components/PerformanceBox";
import QuizStatus from "../components/QuizStatus";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {

  const score = 6;
  const weakTopic = "Dynamic Programming";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">

      <Navbar />

      {/* Page Content */}
      <div className="p-8">

        <h1 className="text-4xl font-bold text-center mb-2 text-black dark:text-white tracking-tight">
          Your Dashboard
        </h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate("/resume")}
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition duration-200"
          >
            Update Resume
          </button>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 font-style: italic">
          Track your progress and improve daily
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <PerformanceBox score={score} weakTopic={weakTopic} />
          <QuizStatus />
        </div>

        {/* AI Insight */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl text-center transition-colors duration-500">

          <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            AI Insight
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            AI detected consistent errors in{" "}
            <span className="text-red-500 dark:text-red-400 font-medium">{weakTopic}</span>.
            Your next quiz will prioritize this topic to improve performance.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;