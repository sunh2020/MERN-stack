import React from "react";

const Results = (props) => {
  return (
    <div>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.email}</p>
      <p>{props.password}</p>
      <p>{props.confirmPassword}</p>
    </div>
  );
};

export default Results;