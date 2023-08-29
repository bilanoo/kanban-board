import {
  CurrentStatus,
  CurrentStatusProps,
} from "../BoardColumns/Column/ViewTaskModal/CurrentStatus/CurrentStatus";
import { DeletableField } from "./DeletableField/DeletableField";
import {
  DialogContainer,
  Header,
  ContentContainer,
  ContentTitle,
  InputField,
  InputDescription,
  SubtasksContainer,
  AddNewSubtaskButton,
  ConfirmChangesButton,
} from "./styles";

interface AddOrEditTaskModalProps extends CurrentStatusProps {}

export const AddOrEditTaskModal = ({
  currentStatusValue,
  setSelectedTaskContent,
}: AddOrEditTaskModalProps) => {
  return (
    <DialogContainer open={true} maxWidth="sm" fullWidth>
      <Header>Add New Task</Header>

      <ContentContainer>
        <ContentTitle>Title</ContentTitle>
        <InputField
          size="small"
          variant="outlined"
          placeholder="e.g. Take coffee break"
          customWidth="416px"
        ></InputField>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Description</ContentTitle>
        <InputDescription
          size="medium"
          variant="outlined"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          maxRows={Infinity}
          multiline={true}
          inputProps={{
            style: {
              height: "112px",
            },
          }}
        ></InputDescription>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Subtasks</ContentTitle>
        <SubtasksContainer>
          <DeletableField placeholderText="e.g. Make coffee" />
          <DeletableField placeholderText="e.g. Drink coffee & smile" />
        </SubtasksContainer>
        <AddNewSubtaskButton>+Add New Subtask</AddNewSubtaskButton>
      </ContentContainer>

      <CurrentStatus
        statusLabel="Status"
        selectFieldWidth="416px"
        selectFieldHeight="40px"
        currentStatusValue={currentStatusValue}
        setSelectedTaskContent={setSelectedTaskContent}
      />

      <ConfirmChangesButton>Save Changes</ConfirmChangesButton>
    </DialogContainer>
  );
};
