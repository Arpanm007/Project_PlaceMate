import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-3 flex justify-between items-center shadow-md transition-colors duration-500">

      <h1 className="text-black dark:text-white font-bold text-lg tracking-wide transition-colors duration-500">
        PlaceMate
      </h1>

      <div className="flex gap-4 text-sm">

        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Home
        </Link>

        <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Dashboard
        </Link>

        <Link to="/admin" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
          Admin
        </Link>

      </div>
    </div>
  );
}

export default Navbar;