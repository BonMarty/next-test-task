"use client";

import { createContext, useContext, useReducer } from "react";
import { TokenReducer } from "../reducers";

const TokenContext = createContext({});

export const useToken = () => useContext(TokenContext);

export default function TokenProvider({ children }) {
  const [state, dispatch] = useReducer(TokenReducer, { token: "" });

  return (
    <TokenContext.Provider value={{ state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
}
