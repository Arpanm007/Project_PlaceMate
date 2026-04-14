import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  // 🔥 GET USER
  const user = JSON.parse(localStorage.getItem("user"));

  /* 🔁 FIREBASE VERSION (REPLACE LATER)
  const user = auth.currentUser;
  const role = await getUserRoleFromFirestore();
  */

  // 🔥 SMART NAVIGATION
  const handleGetStarted = () => {
    if (!user) {
      navigate("/auth");
    } else if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <Navbar />

      {/* HERO */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-2.5 leading-[1.2] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Crack Placements with Intelligent AI Guidance
        </h1>

        <p className="text-gray-400 max-w-xl mb-8 text-lg">
          Personalized preparation system that analyzes your strengths,
          identifies weak areas, and adapts your learning daily.
        </p>

        <button
          onClick={handleGetStarted}
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-gray-200 transition duration-300 shadow-lg"
        >
          {!user ? "Get Started 🚀" : "Go to Dashboard →"}
        </button>

      </div>

      {/* FEATURES */}
      <div className="mt-32 px-8 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold mb-2">🧠 AI Resume Analysis</h3>
            <p className="text-gray-400 text-sm">
              Upload your resume and get insights on strengths and improvement areas.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold mb-2">📊 Performance Tracking</h3>
            <p className="text-gray-400 text-sm">
              Track your progress with detailed analytics and insights.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.03] transition">
            <h3 className="text-xl font-semibold mb-2">🎯 Smart Recommendations</h3>
            <p className="text-gray-400 text-sm">
              Get personalized learning paths based on your weak areas.
            </p>
          </div>

        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mt-32 px-8 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-400">

          <div>
            <h3 className="text-white font-semibold mb-2">1. Upload Resume</h3>
            <p>Let AI analyze your skills</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">2. Get Insights</h3>
            <p>Identify weak areas instantly</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">3. Improve Daily</h3>
            <p>Follow personalized roadmap</p>
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="mt-32 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Start your placement journey today 🚀
        </h2>

        <button
          onClick={handleGetStarted}
          className="mt-4 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          {!user ? "Join Now" : "Go to Dashboard"}
        </button>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;