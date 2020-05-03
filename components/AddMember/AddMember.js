import React from "react";

const AddMember = () => {
  return (
    <form method="POST" action="/api/addMember">
      <input type="text" name="memberName" placeholder="member name" required />
      <input type="submit" value="Add Member" />
    </form>
  );
};

export default AddMember;
