"use client";

import { createContext, useContext, useReducer } from "react";
import { AvatarReducer } from "../reducers";

const AvatarContext = createContext({});

export const useAvatar = () => useContext(AvatarContext);

export default function AvatarProvider({ children }) {
  const [state, dispatch] = useReducer(AvatarReducer, { avatar: "" });

  return (
    <AvatarContext.Provider value={{ state, dispatch }}>
      {children}
    </AvatarContext.Provider>
  );
}
