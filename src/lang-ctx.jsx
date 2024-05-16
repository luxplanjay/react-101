import { createContext, useState } from "react";

export const langContext = createContext();

export default function LangProvider({ children }) {
  const [lang, changeLang] = useState("en");

  return (
    <langContext.Provider value={{ lang, changeLang }}>
      {children}
    </langContext.Provider>
  );
}
