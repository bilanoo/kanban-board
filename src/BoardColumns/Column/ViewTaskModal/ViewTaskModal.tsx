import {
  DialogContainer,
  HeadingContainer,
  TaskInformationText,
  TaskTitle,
} from "./styles";
import { Subtasks } from "./Subtasks/Subtasks";
import { CurrentStatus } from "./CurrentStatus/CurrentStatus";
import { GenericVerticalDropDown } from "../../../EditOrDeleteBoard/EditOrDeleteBoard";
import { Box } from "@mui/material";
import { useCurrentMode } from "../../../stores/LightOrDarkMode.store";
import { getDesignTokens } from "../../../theme";
import { Tasks } from "../../../stores/BoardContent.store";
import { selectedTaskContentProps } from "../Column";
import { useState } from "react";
import { AddOrEditTaskModal } from "../../../AddOrEditTaskModal/AddOrEditTaskModal";

interface ViewTaskModalProps {
  openTaskModal: boolean;
  onClose: () => void;
  handleOpenConfirmationDelitionModal: () => void;
  selectedTaskContent: Tasks;
  setSelectedTaskContent: React.Dispatch<
    React.SetStateAction<selectedTaskContentProps>
  >;
}

export const ViewTaskModal = ({
  openTaskModal,
  onClose,
  selectedTaskContent,
  setSelectedTaskContent,
  handleOpenConfirmationDelitionModal,
}: ViewTaskModalProps) => {
  const [modalStatus, setModalStatus] = useState<null | HTMLElement>(null);
  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false);
  const lightOrDarkMode = useCurrentMode();
  const theme = getDesignTokens(lightOrDarkMode);

  const handleOpenTaskDelitionModal = () => {
    setModalStatus(null);
    handleOpenConfirmationDelitionModal();
  };

  const handleOpenEditTaskModal = () => {
    setOpenEditTaskModal(true);
    setModalStatus(null);
  };

  const onCloseEditTaskModal = () => {
    setOpenEditTaskModal(false);
  };

  const dropdownOptions = [
    {
      optionValue: "Edit Task",
      textColor: theme.custom.mediumGrey,
      handleClick: handleOpenEditTaskModal,
    },
    {
      optionValue: "Delete Task",
      textColor: theme.custom.delete,
      handleClick: handleOpenTaskDelitionModal,
    },
  ];

  const handleVerticalEllipsisOnClose = () => {
    setModalStatus(null);
  };
  return (
    <>
      <DialogContainer open={openTaskModal} maxWidth="sm" onClose={onClose}>
        <HeadingContainer>
          <TaskTitle>{selectedTaskContent.title}</TaskTitle>

          <Box sx={{ alignSelf: "center" }}>
            <GenericVerticalDropDown
              modalStatus={modalStatus}
              setModalStatus={setModalStatus}
              handleClose={handleVerticalEllipsisOnClose}
              altInformation="edit or delete board"
              marginLeft="1px"
              marginRight="0"
              dropdownOptions={dropdownOptions}
            />
          </Box>
        </HeadingContainer>

        <TaskInformationText>
          {selectedTaskContent.description
            ? selectedTaskContent.description
            : "No description provided"}
        </TaskInformationText>

        <Subtasks
          subtasks={selectedTaskContent.subtasks}
          setSelectedTaskContent={setSelectedTaskContent}
        />

        <CurrentStatus
          statusLabel="Current Status"
          selectFieldWidth="auto"
          selectFieldHeight="auto"
          currentStatusValue={selectedTaskContent.status}
          setSelectedTaskContent={setSelectedTaskContent}
        />
      </DialogContainer>

      <AddOrEditTaskModal
        openEditTaskModal={openEditTaskModal}
        onCloseEditTaskModal={onCloseEditTaskModal}
        taskContentInitialValue={selectedTaskContent}
        currentStatusValue={selectedTaskContent.status}
        setSelectedTaskContent={setSelectedTaskContent}
      />
    </>
  );
};
