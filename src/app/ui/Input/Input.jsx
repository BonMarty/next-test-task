"use client";

import React, { useState } from "react";

const Input = ({
  label,
  value,
  onChange,
  type,
  prefixIcon,
  suffixIcon,
  isPassword,
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  return (
    <label className="space-y-1 block">
      <p className="font-bold text-white">{label}</p>

      <div className="relative">
        {prefixIcon && prefixIcon}
        <input
          className={
            type === "checkbox"
              ? "appearance-none w-4 h-4 rounded border-2 border-white relative peer"
              : "pl-12 pr-4 py-2 rounded-2xl bg-white w-full text-black font-medium"
          }
          type={isPassword && isVisiblePassword ? "text" : type}
          value={value}
          onChange={onChange}
        />
        {suffixIcon && (
          <div onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
            {suffixIcon}
          </div>
        )}
        {type === "checkbox" && (
          <span className="absolute -top-[2px] left-[2px] w-fit h-fit opacity-0 pointer-events-none transition-opacity duration-100 peer-checked:opacity-100">
            &#10004;
          </span>
        )}
      </div>
    </label>
  );
};

export default Input;
