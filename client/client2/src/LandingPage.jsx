import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome</h1>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/students")}>Show Students</button> {/* New Button */}
    </div>
  );
}

export default LandingPage;