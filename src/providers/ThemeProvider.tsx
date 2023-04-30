import React from "react";
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { theme } from "./theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
