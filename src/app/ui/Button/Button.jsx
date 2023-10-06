import React from "react";

const Button = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} w-full rounded-full text-center font-bold py-5 transition-shadow duration-300 hover:shadow-xl focus:shadow-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
