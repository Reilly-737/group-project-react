import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        FACE CAKE 💄💋
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/makeup">Makeup</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
