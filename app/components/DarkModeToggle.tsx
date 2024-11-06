"use client"
import React from "react";
import "react-toggle/style.css";

import Toggle from "react-toggle";
import styled from "styled-components";

import { themeList } from "../store/theme";
import { useDarkMode } from "../store/hooks";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();


  return (
    <ToggleContainer>
      <Toggle
        defaultChecked={theme === themeList.dark}
        data-testid="dark-mode-toggle"
        onChange={toggleTheme}
      />
      <ToggleLabel $color={theme.background_secondary}>Dark Mode</ToggleLabel>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


interface ToggleLabelProps {
  $color: string;
}

const ToggleLabel = styled.span<ToggleLabelProps>`
  margin-left: 10px;
  color: ${(props) => props.$color};
`;
