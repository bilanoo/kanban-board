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

interface ViewTaskModalProps {
  openTaskModal: boolean;
  onClose: () => void;
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
        <TaskTitle>{selectedTaskContent.title}</TaskTitle>

        <Box sx={{ alignSelf: "center" }}>
          <GenericVerticalDropDown
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

      <CurrentStatus />
    </DialogContainer>
  );
};
