import React, { useState, useEffect } from "react";
import CreateTeamStyles from "./CreateTeam.style";
import Header from "../Header/Header";
import ErrorMessage from "../Error/ErrorMessage";

const CreateTeam = ({ teamNames }) => {
  const [teamName, setTeamName] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setError("");
    if (password !== confirmPassword) {
      setError("Password does not match with confirm password!");
    }
    if (teamNames.includes(teamName)) {
      setError("Team name already taken!");
    }
  }, [password, confirmPassword, teamName]);

  const canSubmitForm = () =>
    password === confirmPassword && !teamNames.includes(teamName);

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
        {error && <ErrorMessage message={error} />}
        <input disabled={!canSubmitForm()} type="submit" value="Create Team" />
      </form>
      <style jsx>{CreateTeamStyles}</style>
    </div>
  );
};

export default CreateTeam;
