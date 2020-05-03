import React from "react";
import Header from "../Header/Header";
import DashboardStyles from "./Dashboard.style";
import Meter from "../Meter/Meter";
import AddMember from "../AddMember/AddMember";

const Dashboard = ({ data, teamName }) => {
  return (
    <div>
      <Header title={teamName} />
      <AddMember />
      <Meter data={data} />
      <style jsx>{DashboardStyles}</style>
    </div>
  );
};

export default Dashboard;
