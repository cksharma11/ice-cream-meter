import React from "react";
import MeterStyles from "../Meter.style";
import { httpPOST } from "../../../httpClient/httpClient";

const SingleMeter = ({ stats }) => {
  const { name, count } = stats;

  const incCount = async () => {
    await httpPOST("/api/incIcecreamCount", { name });
  };

  const decCount = async () => {
    await httpPOST("/api/decIcecreamCount", { name });
  };

  return (
    <div className="meter flex">
      <h3 className="name"> {name}</h3>
      <div className="flex-row">
        <button className="counter" onClick={decCount}>
          -
        </button>
        <div className="count flex">{count}</div>
        <button className="counter" onClick={incCount}>
          +
        </button>
      </div>
      <style jsx>{MeterStyles}</style>
    </div>
  );
};

export default SingleMeter;
