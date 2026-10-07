import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
