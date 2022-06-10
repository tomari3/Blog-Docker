import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/settings/Theme";
import { Global } from "./styles/settings/Global";

import { AllRoutes } from "./components/Routes";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const savedTheme = localStorage.getItem("theme");

function App() {
  const [activeTheme, setActiveTheme] = useState(
    savedTheme ? savedTheme : darkModeQuery.matches ? "dark" : "light"
  );

  useEffect(() => {
    darkModeQuery.addEventListener("change", (event) => {
      setActiveTheme(event.matches ? "dark" : "light");
    });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  const toggleTheme = () => {
    const newTheme = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <HashRouter basename="/">
          <AllRoutes toggle={toggleTheme} />
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
