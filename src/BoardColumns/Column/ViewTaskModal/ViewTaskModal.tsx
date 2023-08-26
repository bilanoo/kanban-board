import {
  DialogContainer,
  HeadingContainer,
  TaskInformationText,
  TaskTitle,
} from "./styles";
import { Subtasks } from "./Subtasks/Subtasks";
import { CurrentStatus } from "./CurrentStatus/CurrentStatus";
import { EditOrDeleteBoard } from "../../../Header/EditOrDeleteBoard/EditOrDeleteBoard";
import { Box } from "@mui/material";
import { useCurrentMode } from "../../../stores/LightOrDarkMode.store";
import { getDesignTokens } from "../../../theme";

interface ViewTaskModalProps {
  openTaskModal: boolean;
  onClose: () => void;
}

export const ViewTaskModal = ({
  openTaskModal,
  onClose,
}: ViewTaskModalProps) => {
  const lightOrDarkMode = useCurrentMode();
  const theme = getDesignTokens(lightOrDarkMode);
  const dropdownOptions = [
    { optionValue: "Edit Task", textColor: theme.custom.mediumGrey },
    { optionValue: "Delete Task", textColor: theme.custom.delete },
  ];

  return (
    <DialogContainer open={openTaskModal} maxWidth="sm" onClose={onClose}>
      <HeadingContainer>
        <TaskTitle>
          Research pricing points of various competitors and trial different
          business models
        </TaskTitle>

        <Box sx={{ alignSelf: "center" }}>
          <EditOrDeleteBoard
            altInformation="edit or delete board"
            marginLeft="-10px"
            marginRight="0"
            dropdownOptions={dropdownOptions}
          />
        </Box>
      </HeadingContainer>

      <TaskInformationText>
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </TaskInformationText>

      <Subtasks />

      <CurrentStatus />
    </DialogContainer>
  );
};
