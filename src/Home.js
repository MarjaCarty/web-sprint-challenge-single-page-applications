import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
      <div className="hero">
        <Link to="/pizza">Pizza?</Link>
      </div>
    </div>
  );
}
