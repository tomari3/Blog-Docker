import { Outlet } from "react-router-dom";
import { StyledLayout } from "../styles/StyledLayout";

import { Header } from "./header/Header";

export const Layout = ({ toggle }) => {
  return (
    <StyledLayout>
      <Header toggle={toggle} />

      <Outlet />
    </StyledLayout>
  );
};
