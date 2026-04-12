function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-6"></div>

      <h2 className="text-xl font-semibold">
        Analyzing your resume...
      </h2>

      <p className="text-gray-400 mt-2">
        AI is finding your best-fit companies
      </p>

    </div>
  );
}

export default Loader;