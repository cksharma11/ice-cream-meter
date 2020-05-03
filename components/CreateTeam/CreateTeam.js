import React, { useState, useEffect } from "react";
import CreateTeamStyles from "./CreateTeam.style";
import Header from "../Header/Header";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Password does not match with confirm password!");
    }
  }, [password, confirmPassword]);

  return (
    <div className="container flex">
      <Header />
      <form
        method="POST"
        action="/api/createTeam"
        className="createTeamForm flex"
      >
        <h1 className="formTitle">Create Team</h1>
        <input
          type="text"
          name="teamName"
          placeholder="team name"
          required
          onChange={(e) => {
            setTeamName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="confirm-password"
          name="confirmPassword"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {error && <p className="errorMessage">{error}</p>}
        <input
          disabled={password !== confirmPassword}
          type="submit"
          value="Create Team"
        />
      </form>
      <style jsx>{CreateTeamStyles}</style>
    </div>
  );
};

export default CreateTeam;
