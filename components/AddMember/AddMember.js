import React from "react";
import DashboardStyles from "../Dashboard/Dashboard.style";

const AddMember = () => {
  return (
    <form method="POST" action="/api/addMember" className="addMember flex-row">
      <input type="text" name="name" placeholder="member name" required />
      <input type="submit" value="Add Member" />
      <style jsx>{DashboardStyles}</style>
    </form>
  );
};

export default AddMember;
