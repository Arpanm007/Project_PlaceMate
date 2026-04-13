import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  /* 🔁 FIREBASE VERSION (REPLACE LATER)
  const storedUser = auth.currentUser;
  const role = await getUserRoleFromFirestore();
  */

  // ❌ Not logged in
  if (!storedUser) {
    return <Navigate to="/auth" />;
  }

  // 🔥 Role check (ONLY IF ROLE IS PASSED)
  if (role && storedUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;