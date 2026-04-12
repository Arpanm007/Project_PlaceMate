import { useState } from "react";

function ResumeUploadBox({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl text-center transition-colors duration-500">
      
      <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Upload / Update Your Resume
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        AI will analyze your skills and suggest best-fit companies
      </p>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-700 dark:text-gray-300
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-white file:text-black
        dark:file:bg-gray-700 dark:file:text-white
        hover:file:bg-gray-200 dark:hover:file:bg-gray-600"
      />

      {file && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Selected: {file.name}
        </p>
      )}

      <button
        onClick={handleUpload}
        className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition duration-200"
      >
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUploadBox;