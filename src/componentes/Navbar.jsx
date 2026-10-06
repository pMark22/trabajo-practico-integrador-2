import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;