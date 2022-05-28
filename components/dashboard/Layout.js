import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import AppBar from "./AppBar";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#cb0cce",
    },
    secondary: {
      main: "#07C5DF",
    },
  },
};

const theme = createTheme(themeOptions)

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <AppBar />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
