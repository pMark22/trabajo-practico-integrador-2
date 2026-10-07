import { Link, useNavigate } from "react-router";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isLogged = localStorage.getItem("isLogged");

  const handleLogout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("No se pudo cerrar la sesion");
      }

      localStorage.removeItem("isLogged");
      navigate("/login");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="border-b p-4">
      <div className="flex justify-center gap-6">
        {isLogged ? (
          <>
            <Link to="/home">Home</Link>

            <button onClick={handleLogout} disabled={loading}>
              {loading ? "Cerrando sesion..." : "Cerrar sesion"}
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>

      {error && <p className="text-center">{error.message}</p>}
    </nav>
  );
};
