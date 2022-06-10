import React from "react";
import { Sun } from "styled-icons/bootstrap";
import { Moon } from "styled-icons/bootstrap";

export const ThemeModeToggle = ({ on, toggle }) => {
  const props = {
    type: "button",
    role: "switch",
    onclick: typeof toggle === "function" ? toggle : () => {},
    "aria-checked": (on = on === true),
  };

  return <button {...props}>{on ? <Sun /> : <Moon />}</button>;
};
