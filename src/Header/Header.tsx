import { EditOrDeleteBoard } from "./EditOrDeleteBoard/EditOrDeleteBoard";

import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import { Container, BoardSelected, AddNewTask, LogoContainer } from "./style";
import { useCurrentMode } from "../stores/LightOrDarkMode.store";
import { useSelectedBoard } from "../stores/BoardContent.store";
import { getDesignTokens } from "../theme";

export const Header = () => {
  const lightOrDarkMode = useCurrentMode();
  const selectedBoard = useSelectedBoard();

  const theme = getDesignTokens(lightOrDarkMode);

  const dropdownOptions = [
    { optionValue: "Edit Board", textColor: theme.palette.text.primary },
    { optionValue: "Delete Board", textColor: theme.custom.delete },
  ];
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
      <BoardSelected variant="h6">{selectedBoard}</BoardSelected>
      <AddNewTask disabled> + Add New Task</AddNewTask>
      <EditOrDeleteBoard
        altInformation="edit or delete task"
        marginLeft="10px"
        marginRight="10px"
        dropdownOptions={dropdownOptions}
      />
    </Container>
  );
};
