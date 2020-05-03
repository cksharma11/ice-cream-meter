import React from "react";
import LandingStyles from "./Landing.styles";
import Link from "next/link";
import Header from "../Header/Header";

const Landing = () => {
  return (
    <div className="landingContainer">
      <Header />
      <div className="optionContainer">
        <Link href="/createTeam">
          <a className="link">Create Team</a>
        </Link>
        <Link href="/">
          <a className="link">Log In Team</a>
        </Link>
      </div>
      <style jsx>{LandingStyles}</style>
    </div>
  );
};

export default Landing;
