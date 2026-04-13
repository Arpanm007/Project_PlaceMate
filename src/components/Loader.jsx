function Loader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black dark:border-white mb-6"></div>

      {/* Title */}
      <h2 className="text-xl font-semibold">
        {title || "Analyzing your resume..."}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {subtitle || "AI is finding your best-fit companies"}
      </p>

    </div>
  );
}

export default Loader;