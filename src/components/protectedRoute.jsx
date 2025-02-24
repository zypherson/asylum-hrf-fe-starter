import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/" replace />;
};