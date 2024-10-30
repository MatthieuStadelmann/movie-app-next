"use client"
import React, { Dispatch, SetStateAction } from "react";
import { Theme, themeList } from "./theme";

export const DarkModeContext = React.createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
}>({
  theme: themeList.light,
  setTheme: () => {},
  toggleTheme: () => {},
});