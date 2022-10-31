import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h4>MongoDB CRUD</h4>
      <div>
        <Link className="nav-item" to="/">
          Users
        </Link>
        <Link className="nav-item" to="/users/add">
          Add Users
        </Link>
      </div>
    </div>
  );
};

export default Header;
