import React, { useState } from "react";
import MeterStyles from "../Meter.style";
import { httpPOST } from "../../../httpClient/httpClient";

const SingleMeter = ({ stats }) => {
  const { name, count: initialCount } = stats;

  const [count, setCount] = useState(initialCount);

  const incCount = async () => {
    const { success } = await httpPOST("/api/incIcecreamCount", { name });
    if (success) setCount(count + 1);
  };

  const decCount = async () => {
    const { success } = await httpPOST("/api/decIcecreamCount", { name });
    if (success) setCount(count - 1);
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
