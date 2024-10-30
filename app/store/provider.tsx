"use client"
import React, { useState, ReactNode } from "react";
import { DarkModeContext } from "./context";
import { Theme, themeList } from "./theme";

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(themeList.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themeList.light ? themeList.dark : themeList.light
    );
  };

  return (
    <DarkModeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};