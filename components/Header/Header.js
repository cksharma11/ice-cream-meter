import React from "react";
import HeaderStyles from "./Header.style";

const Header = ({ title = "Ice Cream Meter" }) => {
  return (
    <h1 className="heading">
      {title}
      <style jsx>{HeaderStyles}</style>
    </h1>
  );
};

export default Header;
