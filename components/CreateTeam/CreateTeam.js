import React, { useState, useEffect } from "react";
import CreateTeamStyles from "./CreateTeam.style";
import Header from "../Header/Header";

const CreateTeam = ({ teamNames }) => {
  const [teamName, setTeamName] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    setError("");
    if (password !== confirmPassword) {
      setIsValidForm(false);
      setError("Password does not match with confirm password!");
    }
    if (teamNames.includes(teamName)) {
      setIsValidForm(false);
      setError("Team name already taken!");
    }
  }, [password, confirmPassword, teamName]);

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
        <input disabled={!isValidForm} type="submit" value="Create Team" />
      </form>
      <style jsx>{CreateTeamStyles}</style>
    </div>
  );
};

export default CreateTeam;
