import { Navigate } from "react-router";

export const PublicRoute = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged");

  if (isLogged) {
    return <Navigate to="/home" replace />;
  }

  return children;
};
