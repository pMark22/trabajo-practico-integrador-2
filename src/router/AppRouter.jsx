import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "../componentes/Navbar.jsx";
import { LoginPage } from "../pages/LoginPage.jsx";
import { RegisterPage } from "../pages/RegisterPage.jsx";
import { HomePage } from "../pages/HomePage.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { PublicRoute } from "./PublicRoute.jsx";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
