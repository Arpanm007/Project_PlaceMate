import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResumeUploadBox from "../components/ResumeUploadBox";
import Loader from "../components/Loader";

function ResumeUpload() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = () => {
    setLoading(true);

    // simulate AI processing
    setTimeout(() => {
      navigate("/companies");
    }, 2500);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center transition-colors duration-500">
      <ResumeUploadBox onUpload={handleUpload} />
    </div>
  );
}

export default ResumeUpload;