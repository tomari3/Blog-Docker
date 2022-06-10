import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const StyledTabs = styled(Tabs)``;

export const StyledTabList = styled(TabList)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-items: center;
  list-style: none;
  height: 3rem;
`;
StyledTabList.tabsRole = "TabList";

export const StyledTab = styled(Tab)`
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  p {
    line-height: 0;
  }
  &.react-tabs__tab--selected {
    font-size: var(--fontSizeMedium);
    font-weight: bold;
    &::after {
      bottom: 0;
      left: 1px;
      position: absolute;
      content: "";
      width: calc(100% - 2px);
      height: 3px;
      background-color: var(--accent);
    }
    &::before {
      opacity: 0;
      --size: 0%;
    }
    &:hover {
      &::before {
        opacity: 0;
        --size: 0%;
      }
    }
  }
  &::before {
    --size: 0%;
    transition: all 0.3s ease;
    opacity: 0;
    z-index: -1;
    bottom: calc(50% - (var(--size) / 2));
    left: calc(50% - (var(--size) / 2));
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    background-color: var(--accentSofter);
    border-radius: var(--radiusBig);
  }
  &:hover {
    &::before {
      opacity: 1;
      --size: 80%;
    }
  }

  &:focus-visible {
    outline: 1px solid var(--accentSofter);
  }
`;
StyledTab.tabsRole = "Tab";

export const StyledTabPanel = styled(TabPanel)``;
StyledTabPanel.tabsRole = "TabPanel";
