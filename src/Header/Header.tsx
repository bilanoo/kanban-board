import { EditOrDeleteBoard } from "./EditOrDeleteBoard/EditOrDeleteBoard";

import LogoLight from "../assets/logo-light.svg";
import {
  Container,
  BoardSelected,
  AddNewTask,
  LogoContainer,
  LogoName,
} from "./style";

export const Header = () => {
  return (
    <Container>
      <LogoContainer className="logo-container">
        <div style={{ width: "40px", alignItems: "center" }}>
          <img
            src={LogoLight}
            alt="kanban-logo"
            className="logo"
            style={{ float: "left" }}
          />
        </div>
        <LogoName style={{ padding: 0, margin: 0 }} className="logo-name">
          kanban
        </LogoName>
      </LogoContainer>
      <BoardSelected variant="h6">Platform Launch</BoardSelected>
      <AddNewTask disabled> + Add New Task</AddNewTask>
      <EditOrDeleteBoard />
    </Container>
  );
};
