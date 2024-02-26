import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="nav-item d-flex ">
        <Link className="nav-link" to="/" style={{
          color: 'black',
          borderRadius: '8px',
          padding: '6px',
          margin: '10px',
          textDecoration: 'none'
        }}>Home</Link>
        <Link className="nav-link" to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
          padding: '6px',
          margin: '10px',
          textDecoration: 'none'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;