import React from "react";
import { StyledSearchPanel } from "../styles/StyledSearchPanel";
import { Search } from "./svg/Search";

export const SearchPanel = () => {
  return (
    <StyledSearchPanel className="SearchPanel">
      <div className="search-panel">
        <div className="search-panel_icon">
          <Search $noHover />
        </div>
        <div className="search-panel_input">
          <input />
        </div>
      </div>
    </StyledSearchPanel>
  );
};
