"use client"
import { DarkModeContext } from "@/app/store/context";
import React, { useContext } from "react";
import styled from "styled-components";


interface AppContainerRawProps {
  $backgroundColor: string;
}


const AppContainerRaw = styled.div<AppContainerRawProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor};
`;

export function AppContainer({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(DarkModeContext);

  return (
    <AppContainerRaw $backgroundColor={theme.background}>
      {children}
    </AppContainerRaw>
  );
}