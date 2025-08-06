import React from "react";

const ErrorMessage = ({ message }) =>
  message ? <p className="text-red-600 text-sm text-center">{message}</p> : null;

export default ErrorMessage;