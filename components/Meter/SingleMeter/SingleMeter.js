import React from "react";
import MeterStyles from "../Meter.style";

const SingleMeter = ({ stats }) => {
  return (
    <div className="meter flex">
      <h3 className="name"> {stats.name}</h3>
      <div className="flex-row">
        <button className="counter">-</button>
        <div className="count flex">{stats.count}</div>
        <button className="counter">+</button>
      </div>
      <style jsx>{MeterStyles}</style>
    </div>
  );
};

export default SingleMeter;
