import { GenericVerticalDropDown } from "../EditOrDeleteBoard/EditOrDeleteBoard";

import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import { Container, BoardSelected, AddNewTask, LogoContainer } from "./style";
import { useCurrentMode } from "../stores/LightOrDarkMode.store";
import useBoardContentStore, {
  useSelectedBoard,
} from "../stores/BoardContent.store";
import { getDesignTokens } from "../theme";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { useState } from "react";

export const Header = () => {
  const lightOrDarkMode = useCurrentMode();
  const selectedBoard = useSelectedBoard();

  const theme = getDesignTokens(lightOrDarkMode);

  const [modalStatus, setModalStatus] = useState<null | HTMLElement>(null);
  const [displayDeleteTaskDialog, setDisplayDeleteTaskDialog] =
    useState<boolean>(false);

  const actions = useBoardContentStore((state) => state.actions);

  const handleOpenConfirmationDelitionModal = () => {
    handleVerticalEllipsisOnClose();
    setDisplayDeleteTaskDialog(true);
  };

  const handleCancelButtonClick = () => {
    setDisplayDeleteTaskDialog(false);
  };

  const handleDeleteButtonClick = () => {
    handleVerticalEllipsisOnClose();
    actions.removeColumnFromKanbanData();
    setDisplayDeleteTaskDialog(false);
  };

  const handleVerticalEllipsisOnClose = () => {
    setModalStatus(null);
  };

  const dropdownOptions = [
    {
      optionValue: "Edit Board",
      textColor: theme.palette.text.primary,
      handleClick: () => console.log("clicked!"),
    },
    {
      optionValue: "Delete Board",
      textColor: theme.custom.delete,
      handleClick: handleOpenConfirmationDelitionModal,
    },
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
      <GenericVerticalDropDown
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        handleClose={handleVerticalEllipsisOnClose}
        altInformation="edit or delete task"
        marginLeft="10px"
        marginRight="10px"
        dropdownOptions={dropdownOptions}
      />
      <DeleteConfirmationModal
        typeOfDeletion="board"
        confirmationDescription={`Are you sure you want to delete the ${selectedBoard} board? This action will remove all columns and tasks and cannot be reversed.`}
        displayDeleteTaskDialog={displayDeleteTaskDialog}
        handleCancelButtonClick={handleCancelButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      />
    </Container>
  );
};
