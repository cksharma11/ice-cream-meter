import React from "react";
import CreateTeamStyles from "./CreateTeam.style";
import Header from "../Header/Header";

const CreateTeam = () => {
  return (
    <div className="container flex">
      <Header />
      <form
        method="POST"
        action="/api/createTeam"
        className="createTeamForm flex"
      >
        <h1 className="formTitle">Create Team</h1>
        <input type="text" placeholder="team name" name="teamName" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="confirm-password"
          name="confirmPassword"
        />
        <input type="submit" value="submit" />
      </form>
      <style jsx>{CreateTeamStyles}</style>
    </div>
  );
};

export default CreateTeam;
