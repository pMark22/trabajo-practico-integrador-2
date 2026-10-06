import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";

import { LoginPage } from "../pages/LoginPage.jsx";
import { RegisterPage } from "../pages/RegisterPage.jsx";
import { HomePage } from "../pages/HomePage.jsx";
import { Navbar } from "../componentes/Navbar.jsx";

export const AppRouter = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
