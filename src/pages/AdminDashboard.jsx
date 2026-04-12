import AdminStats from "../components/AdminStats";
import UserTable from "../components/UserTable";
import WorkflowControl from "../components/WorkflowControl";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">

      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-black dark:text-white">
          Admin Panel
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">
          Monitor and control the system
        </p>

        <AdminStats />

        <div className="mt-8">
          <UserTable />
        </div>

        <div className="mt-8">
          <WorkflowControl />
        </div>
      </div>

      

    </div>
  );
}

export default AdminDashboard;