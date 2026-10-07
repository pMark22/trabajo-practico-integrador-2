import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="border-b p-4">
      <div className="flex justify-center gap-6">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};
