import React from "react";
import Header from "../Header/Header";
import DashboardStyles from "./Dashboard.style";

const data = [
  { name: "Suhas", count: 0 },
  { name: "Rishi", count: 0 },
  { name: "Keshav", count: 0 },
  { name: "Shalini", count: 0 },
  { name: "Priyanshu", count: 0 },
  { name: "Geeta", count: 0 },
];

const Dashboard = () => {
  return (
    <div>
      <Header title="Audits and Agreements" />
      <div className="dashboardWrapper">
        {data.map((m) => {
          return (
            <div className="meter flex">
              <h3 className="name"> {m.name}</h3>
              <div className="flex-row">
                <button className="counter">-</button>
                <div className="count flex">{m.count}</div>
                <button className="counter">+</button>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{DashboardStyles}</style>
    </div>
  );
};

export default Dashboard;
