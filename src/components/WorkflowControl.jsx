function WorkflowControl() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl text-center transition-colors duration-500">

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        System Control
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-6">

        {/* Start Button */}
        <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 hover:scale-105 transition duration-200">
          Start Quiz System
        </button>

        {/* Pause Button */}
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 hover:scale-105 transition duration-200">
          Pause System
        </button>

      </div>

    </div>
  );
}

export default WorkflowControl;