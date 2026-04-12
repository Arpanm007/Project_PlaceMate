function AdminStats() {
  return (
    <div className="grid md:grid-cols-3 gap-4">

      {/* Users */}
      <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl text-center shadow-md dark:shadow-black/30 hover:shadow-lg hover:scale-[1.02] transition duration-300">
        <h2 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Users
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white">
          120
        </p>
      </div>

      {/* Attempts */}
      <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl text-center shadow-md dark:shadow-black/30 hover:shadow-lg hover:scale-[1.02] transition duration-300">
        <h2 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Attempts
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white">
          450
        </p>
      </div>

      {/* Avg Score */}
      <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl text-center shadow-md dark:shadow-black/30 hover:shadow-lg hover:scale-[1.02] transition duration-300">
        <h2 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Avg Score
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white">
          7.2
        </p>
      </div>

    </div>
  );
}

export default AdminStats;