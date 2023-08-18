import { EditOrDeleteBoard } from "./EditOrDeleteBoard/EditOrDeleteBoard";

import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import { Container, BoardSelected, AddNewTask, LogoContainer } from "./style";
import { useCurrentMode } from "../stores/lightOrDarkMode.store";

export const Header = () => {
  const lightOrDarkMode = useCurrentMode();
  return (
    <Container>
      <LogoContainer className="logo-container">
        <div style={{ width: "40px", alignItems: "center" }}>
          <img
            src={lightOrDarkMode === "light" ? LogoDark : LogoLight}
            alt="kanban-logo"
            className="logo"
            style={{ float: "left" }}
          />
        </div>
      </LogoContainer>
      <BoardSelected variant="h6">Platform Launch</BoardSelected>
      <AddNewTask disabled> + Add New Task</AddNewTask>
      <EditOrDeleteBoard />
    </Container>
  );
};
