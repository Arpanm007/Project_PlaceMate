import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const navigate = useNavigate();

  // 🔥 LOAD FROM LOCALSTORAGE OR DEFAULT
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("profile");

    /* 🔁 FIREBASE VERSION (REPLACE LATER)
    const userFromDB = await getUserFromFirestore();
    return userFromDB;
    */

    return saved
      ? JSON.parse(saved)
      : {
          name: "Arpan Mandal",
          email: "arpan@email.com",
          college: "XYZ University",
          branch: "CSE",
          year: "3rd Year",
          resumeUploaded: true,
          skills: ["DSA", "OOP", "DBMS", "OS"],
          targetCompany: "Amazon",
          lastResume: "2 days ago",
          lastQuiz: "Today",
          lastScore: "6/10",
          companies: [
            { name: "Amazon", match: 85 },
            { name: "Infosys", match: 78 },
            { name: "TCS", match: 72 },
          ],
        };
  });

  // 🔥 EDIT MODE
  const [editMode, setEditMode] = useState(false);

  // 🔥 SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(user));

    /* 🔁 FIREBASE SAVE (REPLACE LATER)
    updateUserInFirestore(user);
    */
  }, [user]);

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 p-6">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Profile
        </h1>

        <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-6">

          {/* 🔹 EDIT BUTTON */}
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm"
          >
            {editMode ? "Save Profile" : "Edit Profile"}
          </button>

          {/* 🔹 BASIC INFO (UPDATED) */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
            {editMode ? (
              <input name="name" value={user.name} onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800" />
            ) : (
              <p className="text-lg font-semibold">{user.name}</p>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Email</p>
            {editMode ? (
              <input name="email" value={user.email} onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800" />
            ) : (
              <p className="text-lg font-semibold">{user.email}</p>
            )}

            {/* 🔥 NEW FIELDS */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">College</p>
            {editMode ? (
              <input name="college" value={user.college} onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800" />
            ) : (
              <p className="text-lg font-semibold">{user.college}</p>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Branch</p>
            {editMode ? (
              <input name="branch" value={user.branch} onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800" />
            ) : (
              <p className="text-lg font-semibold">{user.branch}</p>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Year</p>
            {editMode ? (
              <input name="year" value={user.year} onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800" />
            ) : (
              <p className="text-lg font-semibold">{user.year}</p>
            )}
          </div>

          {/* 🔹 TARGET COMPANY */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Target Company
            </p>

            {editMode ? (
              <input
                name="targetCompany"
                value={user.targetCompany}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white dark:bg-gray-800"
              />
            ) : (
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {user.targetCompany}
              </p>
            )}
          </div>

          {/* 🔹 RESUME */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Resume Status
            </p>

            <p className="text-green-600 dark:text-green-400 font-semibold mb-3">
              {user.resumeUploaded ? "Uploaded" : "Not Uploaded"}
            </p>

            <button
              onClick={() => navigate("/resume")}
              className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg"
            >
              Update Resume
            </button>
          </div>

          {/* 🔹 SKILLS */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Detected Skills
            </p>

            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span key={index}
                  className="px-3 py-1 bg-gray-300 dark:bg-gray-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 🔹 COMPANIES */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Top Matches
            </p>

            {user.companies.map((c, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{c.name}</span>
                <span className="text-green-500">{c.match}%</span>
              </div>
            ))}
          </div>

          {/* 🔹 RECENT ACTIVITY */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Recent Activity
            </p>

            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <p>Last Resume Uploaded: {user.lastResume}</p>
              <p>Last Quiz Attempted: {user.lastQuiz}</p>
              <p>Last Score: {user.lastScore}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;