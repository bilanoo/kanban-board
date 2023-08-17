import "./SideBar.css";
import { Boards } from "./Boards/Boards";

import HideSidebarIcon from "../assets/icon-hide-sidebar.svg";
import { DarkOrLightMode } from "./Boards/DarkOrLightMode/DarkOrLightMode";
import { HideSidebar } from "./Boards/BoardStyles";
import { useState } from "react";

export const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);

  function handleHideSidebarClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setDisplaySidebar(!displaySidebar);
  }

  console.log(displaySidebar);
  return (
    <div className="sidebar-container">
      <Boards />
      <DarkOrLightMode />
      <HideSidebar
        startIcon={<img src={HideSidebarIcon} alt="hide sidebar" />}
        onClick={handleHideSidebarClick}
      >
        Hide Sidebar
      </HideSidebar>
    </div>
  );
};
