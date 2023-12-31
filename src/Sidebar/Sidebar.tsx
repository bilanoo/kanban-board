import { Boards } from "./Boards/Boards";

import HideSidebarIcon from "../assets/icon-hide-sidebar.svg";
import { DarkOrLightMode } from "./Boards/DarkOrLightMode/DarkOrLightMode";
import { HideSidebar } from "./Boards/BoardStyles";
import IconShowSidebar from "../assets/icon-show-sidebar.svg";
import { useState } from "react";
import { Container, DisplaySidebarButton } from "./style";

export const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(true);

  function handleHideSidebarClick(): void {
    setDisplaySidebar(!displaySidebar);
  }

  return (
    <>
      {displaySidebar ? (
        <Container>
          <Boards />
          <DarkOrLightMode />
          <HideSidebar
            startIcon={<img src={HideSidebarIcon} alt="hide sidebar" />}
            onClick={handleHideSidebarClick}
          >
            Hide Sidebar
          </HideSidebar>
        </Container>
      ) : (
        <DisplaySidebarButton
          startIcon={<img src={IconShowSidebar} alt="display sidebar button" />}
          onClick={handleHideSidebarClick}
        />
      )}
    </>
  );
};
