import React from "react";
import ErrorMessageStyles from "./ErrorMessage.style";

const ErrorMessage = ({ message }) => {
  return (
    <p className="errorMessage flex">
      {message}
      <style jsx>{ErrorMessageStyles}</style>
    </p>
  );
};

export default ErrorMessage;
