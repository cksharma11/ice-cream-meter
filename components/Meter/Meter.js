import React from "react";
import MeterStyles from "./Meter.style";
import SingleMeter from "./SingleMeter/SingleMeter";

const Meter = ({ data }) => {
  return (
    <div className="dashboardWrapper">
      {data
        .sort((a, b) => b.count - a.count)
        .map((m) => (
          <SingleMeter stats={m} />
        ))}
      <style jsx>{MeterStyles}</style>
    </div>
  );
};

export default Meter;
