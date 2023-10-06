import React from "react";

const BottomTab = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      {children}
    </div>
  );
};

export default BottomTab;
