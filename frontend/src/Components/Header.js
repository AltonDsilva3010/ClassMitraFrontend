import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar1">
        <a href="/" className="logo">
          ClassMitra
        </a>

        <div className="header-right">
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
