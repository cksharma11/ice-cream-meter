import React from "react";
import LandingStyles from "./Landing.styles";

const Landing = () => {
  return (
    <div className="landingContainer">
      <h1 className="heading">Ice Cream Meter</h1>
      <div className="optionContainer">
        <button>Create Team</button>
        <button>Team Login</button>
      </div>
      <style jsx>{LandingStyles}</style>
    </div>
  );
};

export default Landing;
