function PerformanceBox({ score, weakTopic }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-5 rounded-xl transition-colors duration-500">

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Your Performance
      </h2>

      <p className="text-green-600 dark:text-green-400 font-medium">
        Score: {score}/10
      </p>

      <p className="text-red-500 dark:text-red-400 font-medium">
        Weak Area: {weakTopic}
      </p>

    </div>
  );
}

export default PerformanceBox;