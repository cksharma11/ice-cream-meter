import React, { useState, useEffect } from "react";
import DashboardStyles from "../Dashboard/Dashboard.style";

const AddMember = ({ members, setError }) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(false);
    setError(undefined);
    if (members.includes(name.toLowerCase())) {
      setError("Member name already exists!");
      setDisabled(true);
    }
  }, [name]);

  return (
    <form method="POST" action="/api/addMember" className="addMember flex-row">
      <input
        type="text"
        name="name"
        placeholder="member name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Add Member" disabled={disabled} />
      <style jsx>{DashboardStyles}</style>
    </form>
  );
};

export default AddMember;
