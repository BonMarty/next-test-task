import React from "react";

const Heading = ({ children, isCenter }) => {
  return (
    <h1 className={`${isCenter && "text-center"} font-bold text-2xl`}>
      {children}
    </h1>
  );
};

export default Heading;
