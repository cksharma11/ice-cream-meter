import React, { useState } from "react";
import Header from "../Header/Header";
import DashboardStyles from "./Dashboard.style";
import Meter from "../Meter/Meter";
import AddMember from "../AddMember/AddMember";
import ErrorMessage from "../Error/ErrorMessage";

const Dashboard = ({ data, teamName }) => {
  const [error, setError] = useState(undefined);

  const members = data.map((m) => m.name.toLowerCase());
  const title = `Team ${teamName}'s Ice Cream Meter`;

  return (
    <div>
      <Header title={title} />
      <AddMember members={members} setError={setError} />
      {error && <ErrorMessage message={error} />}
      <Meter data={data} />
      <style jsx>{DashboardStyles}</style>
    </div>
  );
};

export default Dashboard;
