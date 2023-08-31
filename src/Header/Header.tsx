import { GenericVerticalDropDown } from "../EditOrDeleteBoard/EditOrDeleteBoard";

import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import { Container, BoardSelected, AddNewTask, LogoContainer } from "./style";
import { useCurrentMode } from "../stores/LightOrDarkMode.store";
import useBoardContentStore, {
  SelectedBoardContent,
  useSelectedBoard,
  useSelectedBoardContent,
} from "../stores/BoardContent.store";
import { getDesignTokens } from "../theme";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { useState } from "react";
import { AddOrEditTaskModal } from "../AddOrEditTaskModal/AddOrEditTaskModal";
import { selectedTaskContentProps } from "../BoardColumns/Column/Column";
import { AddOrEditBoardModal } from "../AddOrEditBoardModal/AddOrEditBoardModal";

export const Header = () => {
  const lightOrDarkMode = useCurrentMode();
  const selectedBoard = useSelectedBoard();
  const selectedBoardContent = useSelectedBoardContent();

  const theme = getDesignTokens(lightOrDarkMode);

  const [selectedTaskContent, setSelectedTaskContent] =
    useState<selectedTaskContentProps>({
      columnName: "",
      description: "",
      status: "",
      subtasks: [],
      title: "",
      taskIndex: 0,
    });

  const [openEditBoardModal, setOpenEditBoardModal] = useState<boolean>(false);

  const taskContentInitialValue = {
    title: "",
    description: "",
    status: "Todo",
    subtasks: [
      { title: "", isCompleted: false },
      { title: "", isCompleted: false },
    ],
  };

  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false);
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

  const onCloseAddTaskModal = () => {
    setOpenEditTaskModal(false);
  };

  const handleOpenAddTaskModal = () => {
    setOpenEditTaskModal(true);
    setModalStatus(null);
  };

  const handleOpenEditBoardModal = () => {
    setOpenEditBoardModal(true);
    setModalStatus(null);
  };

  const handleCloseEditBoardModal = () => {
    setOpenEditBoardModal(false);
    setModalStatus(null);
  };

  function handleEditBoardSaveChanges(taskContent: SelectedBoardContent): void {
    actions.setSelectedBoardContent(taskContent);
    actions.updateKanbanDataAfterMovingTask();
    handleCloseEditBoardModal();
  }

  const dropdownOptions = [
    {
      optionValue: "Edit Board",
      textColor: theme.palette.text.primary,
      handleClick: handleOpenEditBoardModal,
    },
    {
      optionValue: "Delete Board",
      textColor: theme.custom.delete,
      handleClick: handleOpenConfirmationDelitionModal,
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSaveChanges(taskContent?: any): void {
    setSelectedTaskContent((prevState) => ({
      ...prevState,
      description: taskContent.description,
      status: taskContent.status,
      subtasks: taskContent.subtasks,
      title: taskContent.title,
    }));

    actions.addTaskToColumn({
      ...selectedTaskContent,
      description: taskContent.description,
      status: taskContent.status,
      subtasks: taskContent.subtasks,
      title: taskContent.title,
    });
    onCloseAddTaskModal();
  }

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
      <AddNewTask
        onClick={handleOpenAddTaskModal}
        disabled={selectedBoardContent.columns.length === 0}
      >
        {" "}
        + Add New Task
      </AddNewTask>
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

      <AddOrEditTaskModal
        openEditTaskModal={openEditTaskModal}
        contentTitle="Add New Task"
        onCloseEditTaskModal={onCloseAddTaskModal}
        taskContentInitialValue={taskContentInitialValue}
        setSelectedTaskContent={setSelectedTaskContent}
        currentStatusValue={selectedTaskContent.status}
        handleSaveChanges={handleSaveChanges}
        submitButtonLabel="Create Task"
      />

      <AddOrEditBoardModal
        handleSaveChanges={handleEditBoardSaveChanges}
        openEditOrAddBoardModal={openEditBoardModal}
        taskContentInitialValue={selectedBoardContent}
        contentTitle="Edit Board"
        submitButtonLabel="Save Changes"
        onCloseEditOrAddBoardModal={handleCloseEditBoardModal}
      />
    </Container>
  );
};
