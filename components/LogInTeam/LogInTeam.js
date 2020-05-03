import React from "react";
import LoginInTeamStyles from "./LogInTeam.style";
import Header from "../Header/Header";

const LoginTeam = () => {
  return (
    <div className="container flex">
      <Header />
      <form
        method="POST"
        action="/api/logInTeam"
        className="logInTeamForm flex"
      >
        <h1 className="formTitle">Create Team</h1>
        <input type="text" placeholder="team name" name="teamName" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="submit" value="Login In" />
      </form>
      <style jsx>{LoginInTeamStyles}</style>
    </div>
  );
};

export default LoginTeam;
