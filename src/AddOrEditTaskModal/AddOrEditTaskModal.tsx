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
import {SubTasks, Tasks} from "../stores/BoardContent.store";
import { InputAdornment, SelectChangeEvent } from "@mui/material";
import { selectedTaskContentProps } from "../BoardColumns/Column/Column";
import { ErrorLabel } from "./DeletableField/styles";

export interface AddOrEditTaskModalProps extends CurrentStatusProps {
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
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTaskContent((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  useEffect(() => {
    // This function checks if any subtask title is empty
    function areSubtasksEmpty(subtasks: SubTasks[]) {
      return subtasks.some((subtask) => subtask.title === '');
    }

    // Check if the submit button should be disabled
    const isDisabled = taskContent.title === '' || taskContent.status === '' || areSubtasksEmpty(taskContent.subtasks);
    setDisabled(isDisabled);
  }, [taskContent]);

  useEffect(() => {
    setTaskContent(taskContentInitialValue);
  }, [taskContentInitialValue]);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTaskContent((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const handleCurrentStatusChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: SelectChangeEvent<string | any>
  ): void => {
    setTaskContent((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  const addNewSubtask = (): void => {
    setTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks]; // Create a copy of the subtasks array
      updatedSubtasks.push({ title: "", isCompleted: false });

      return {
        ...prevState,
        subtasks: updatedSubtasks, // Update the subtasks array with the modified copy
      };
    });
  };

  const handleDelatableFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    indexSubtask: number
  ): void => {
    event.preventDefault();
    setTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks]; // Create a copy of the subtasks array
      updatedSubtasks[indexSubtask] = {
        ...updatedSubtasks[indexSubtask],
        title: event.target.value,
      };

      return {
        ...prevState,
        subtasks: updatedSubtasks, // Update the subtasks array with the modified copy
      };
    });
  };

  const handleDeleteSubtask = (index: number): void => {
    setTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks]; // Create a copy of the subtasks array
      updatedSubtasks.splice(index, 1); // Remove the subtask at the specified index

      return {
        ...prevState,
        subtasks: updatedSubtasks, // Update the subtasks array with the modified copy
      };
    });
  };

  const handleCloseEditTaskModal = () => {
    onCloseEditTaskModal();
    setTaskContent(taskContentInitialValue);
  };


  return (
    <DialogContainer
      customHeight="675px"
      open={openEditTaskModal}
      maxWidth="sm"
      fullWidth
      onClose={handleCloseEditTaskModal}
    >
      <Header>{contentTitle}</Header>

      <ContentContainer>
        <ContentTitle>Title</ContentTitle>
        <InputField
          value={taskContent.title}
          error={taskContent.title === ""}
          size="small"
          variant="outlined"
          placeholder="e.g. Take coffee break"
          customWidth="416px"
          onChange={handleTitleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ErrorLabel>
                  {taskContent.title === "" ? "Can't be empty" : ""}
                </ErrorLabel>
              </InputAdornment>
            ),
          }}
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
              key={index + 1}
              placeholderText={eachSubtask.title}
              value={eachSubtask.title}
              indexSubtask={index}
              handleDelatableFieldChange={(event) =>
                handleDelatableFieldChange(event, index)
              }
              handleDeleteSubtask={() => handleDeleteSubtask(index)}
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

      <ConfirmChangesButton
        onClick={() => handleSaveChanges(taskContent)}
        disabled={disabled}
      >
        {submitButtonLabel}
      </ConfirmChangesButton>
    </DialogContainer>
  );
};
