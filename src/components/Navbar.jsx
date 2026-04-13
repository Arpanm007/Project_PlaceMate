import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { auth } from "../firebase";              // 🔁 (FIREBASE - revert later)
// import { signOut } from "firebase/auth";         // 🔁 (FIREBASE - revert later)

function Navbar() {
  const navigate = useNavigate();

  // ✅ MOCK USER STATE (LOCAL TESTING)
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") ? true : false;
  });

  /* 🔁 FIREBASE VERSION (REVERT LATER)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  */

  // ✅ MOCK LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(false);
    navigate("/");
  };

  /* 🔁 FIREBASE LOGOUT (REVERT LATER)
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };
  */

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-3 flex justify-between items-center shadow-md transition-colors duration-500">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-lg font-bold cursor-pointer"
      >
        PlaceMate
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {user ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Profile
            </button>

            <button
              onClick={handleLogout}
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold"
          >
            Login / Signup
          </button>
        )}

      </div>
    </div>
  );
}

export default Navbar;