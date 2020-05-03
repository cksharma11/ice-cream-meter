import React from "react";
import Header from "../Header/Header";
import DashboardStyles from "./Dashboard.style";
import Meter from "../Meter/Meter";

const data = [
  { name: "Suhas", count: 0 },
  { name: "Rishi", count: 3 },
  { name: "Keshav", count: 0 },
  { name: "Shalini", count: 2 },
  { name: "Priyanshu", count: 0 },
  { name: "Geeta", count: 1 },
];

const Dashboard = () => {
  return (
    <div>
      <Header title="Audits and Agreements" />
      <Meter data={data} />
      <style jsx>{DashboardStyles}</style>
    </div>
  );
};

export default Dashboard;
