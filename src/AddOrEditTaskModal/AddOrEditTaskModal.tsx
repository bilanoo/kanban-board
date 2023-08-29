import { useEffect, useState } from "react";
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
import { Tasks } from "../stores/BoardContent.store";
import { SelectChangeEvent } from "@mui/material";
import { selectedTaskContentProps } from "../BoardColumns/Column/Column";

interface AddOrEditTaskModalProps extends CurrentStatusProps {
  taskContentInitialValue: Tasks;
  openEditTaskModal: boolean;
  onCloseEditTaskModal: () => void;
  contentTitle: string;
  setSelectedTaskContent: React.Dispatch<
    React.SetStateAction<selectedTaskContentProps>
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSaveChanges: (taskContent?: Tasks | any) => void;
  submitButtonLabel: string;
}

export const AddOrEditTaskModal = ({
  taskContentInitialValue,
  openEditTaskModal,
  onCloseEditTaskModal,
  contentTitle,
  handleSaveChanges,
  submitButtonLabel,
}: AddOrEditTaskModalProps) => {
  const [taskContent, setTaskContent] = useState<Tasks>(
    taskContentInitialValue
  );

  function handleTitleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  useEffect(() => {
    setTaskContent(taskContentInitialValue);
  }, [taskContentInitialValue]);

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  }

  function handleCurrentStatusChange(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: SelectChangeEvent<string | any>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  }

  function addNewSubtask(): void {
    setTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks]; // Create a copy of the subtasks array
      updatedSubtasks.push({ title: "", isCompleted: false });

      return {
        ...prevState,
        subtasks: updatedSubtasks, // Update the subtasks array with the modified copy
      };
    });
  }

  return (
    <DialogContainer
      open={openEditTaskModal}
      maxWidth="sm"
      fullWidth
      onClose={onCloseEditTaskModal}
    >
      <Header>{contentTitle}</Header>

      <ContentContainer>
        <ContentTitle>Title</ContentTitle>
        <InputField
          value={taskContent.title}
          size="small"
          variant="outlined"
          placeholder="e.g. Take coffee break"
          customWidth="416px"
          onChange={handleTitleChange}
        ></InputField>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Description</ContentTitle>
        <InputDescription
          value={taskContent.description}
          onChange={handleDescriptionChange}
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
          {taskContent.subtasks.map((eachSubtask, index) => (
            <DeletableField
              key={eachSubtask.title + index}
              placeholderText={eachSubtask.title}
              value={eachSubtask.title}
              indexSubtask={index}
              setTaskContent={setTaskContent}
            />
          ))}
        </SubtasksContainer>
        <AddNewSubtaskButton onClick={addNewSubtask}>
          +Add New Subtask
        </AddNewSubtaskButton>
      </ContentContainer>

      <CurrentStatus
        handleChange={handleCurrentStatusChange}
        statusLabel="Status"
        selectFieldWidth="416px"
        selectFieldHeight="40px"
        currentStatusValue={taskContent.status}
      />

      <ConfirmChangesButton onClick={() => handleSaveChanges(taskContent)}>
        {submitButtonLabel}
      </ConfirmChangesButton>
    </DialogContainer>
  );
};
