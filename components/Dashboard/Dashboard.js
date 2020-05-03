import React from "react";
import Header from "../Header/Header";
import DashboardStyles from "./Dashboard.style";
import Meter from "../Meter/Meter";
import AddMember from "../AddMember/AddMember";

const Dashboard = ({ data, teamName }) => {
  const title = `Team ${teamName}'s Ice Cream Meter`;
  return (
    <div>
      <Header title={title} />
      <AddMember />
      <Meter data={data} />
      <style jsx>{DashboardStyles}</style>
    </div>
  );
};

export default Dashboard;
