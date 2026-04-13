import PerformanceBox from "../components/PerformanceBox";
import QuizStatus from "../components/QuizStatus";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Dashboard() {

  // 🔥 MOCK DATA (TEMPORARY)
  const [data, setData] = useState({
    score: 6,
    weakTopics: ["Dynamic Programming", "Graphs", "Recursion"],
    progress: [4, 5, 6, 6, 7],
    streak: 3,
    goal: "Complete 1 quiz today",
    recommendations: [
      "Practice 5 DP problems",
      "Revise Graph traversal",
      "Attempt mock test"
    ],
    activity: [
      "Quiz attempted (Today)",
      "Resume updated (2 days ago)",
      "Score improved to 6/10"
    ]
  });

  /* 🔁 FIREBASE VERSION (REPLACE LATER)
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getDashboardDataFromFirestore();
      setData(userData);
    };
    fetchData();
  }, []);
  */

  // 🔥 LOADING STATE
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader
        title="Analyzing your performance..."
        subtitle="Identifying weak topics"
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">

      <Navbar />

      <div className="p-8">

        {/* 🔹 TITLE */}
        <h1 className="text-4xl font-bold text-center mb-2 tracking-tight">
          Your Dashboard
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 italic">
          Track your progress and improve daily
        </p>

        {/* 🔹 PERFORMANCE + QUIZ */}
        <div className="grid md:grid-cols-2 gap-6">
          <PerformanceBox score={data.score} weakTopic={data.weakTopics[0]} />
          <QuizStatus />
        </div>

        {/* 🔹 PROGRESS SECTION */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Progress</h2>

          <div className="flex gap-3">
            {data.progress.map((val, i) => (
              <div
                key={i}
                className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 rounded-lg text-sm"
              >
                {val}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Last 5 quiz scores
          </p>
        </div>

        {/* 🔹 WEAK TOPICS */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Weak Areas</h2>

          <ul className="space-y-1">
            {data.weakTopics.map((topic, i) => (
              <li key={i} className="text-red-500 dark:text-red-400">
                • {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 STREAK + GOAL */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">

          <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">🔥 Streak</h2>
            <p className="text-2xl font-bold">{data.streak} days</p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">🎯 Today's Goal</h2>
            <p>{data.goal}</p>
          </div>

        </div>

        {/* 🔹 RECOMMENDATIONS */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">
            Recommended for you
          </h2>

          <ul className="space-y-2">
            {data.recommendations.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* 🔹 AI INSIGHT */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold mb-3">
            AI Insight
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            AI detected consistent errors in{" "}
            <span className="text-red-500 dark:text-red-400 font-medium">
              {data.weakTopics[0]}
            </span>.
            Your next quiz will prioritize this topic.
          </p>
        </div>

        {/* 🔹 RECENT ACTIVITY */}
        <div className="mt-8 bg-gray-200 dark:bg-gray-900 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">
            Recent Activity
          </h2>

          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {data.activity.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;