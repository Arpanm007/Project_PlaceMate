function QuizStatus() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-5 rounded-xl transition-colors duration-500">

      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Today's Quiz
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        Your quiz has been sent to your email
      </p>

      <button 
      onClick={() => window.open("https://forms.google.com", "_blank")} 
      className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition duration-200">
        Open Quiz
      </button>

    </div>
  );
}

export default QuizStatus;