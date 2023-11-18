import React from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import "./Header.css";

const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    props.onLogout();
    alertify.success("Logged out successfully!");
  };

  return (
    <div className="header__container">
      <h2>Task Manager Platform</h2>
      <ul>
        {!localStorage.getItem("user") && (
          <li>
            <Link to="/">Signup</Link>
          </li>
        )}
        {!localStorage.getItem("user") && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {localStorage.getItem("user") && <li onClick={handleLogout}>Logout</li>}
      </ul>
    </div>
  );
};

export default Header;
