import { useEffect, useState } from "react";
import {
  AddNewSubtaskButton,
  ConfirmChangesButton,
  ContentContainer,
  ContentTitle,
  DialogContainer,
  Header,
  InputField,
} from "../AddOrEditTaskModal/styles";
import {Columns, SelectedBoardContent} from "../stores/BoardContent.store";
import { DeletableField } from "../AddOrEditTaskModal/DeletableField/DeletableField";
import { InputAdornment } from "@mui/material";
import { ErrorLabel } from "../AddOrEditTaskModal/DeletableField/styles";

interface AddOrEditBoardModalProps {
  taskContentInitialValue: SelectedBoardContent;
  openEditOrAddBoardModal: boolean;
  onCloseEditOrAddBoardModal: () => void;
  contentTitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSaveChanges: (taskContent?: SelectedBoardContent | any) => void;
  submitButtonLabel: string;
}

export const AddOrEditBoardModal = ({
  taskContentInitialValue,
  contentTitle,
  openEditOrAddBoardModal,
  onCloseEditOrAddBoardModal,
  handleSaveChanges,
  submitButtonLabel,
}: AddOrEditBoardModalProps) => {
  const [taskContent, setTaskContent] = useState<SelectedBoardContent>(
    taskContentInitialValue
  );
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    // This function checks if any column title is empty
    function areSubtasksEmpty(subtasks: Columns[]) {
      return subtasks.some((eachColumn) => eachColumn.name === '');
    }

    // Check if the submit button should be disabled
    const isDisabled = taskContent.name === ''  || areSubtasksEmpty(taskContent.columns);
    setDisabled(isDisabled);
  }, [taskContent]);

  const handleBoardNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTaskContent((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleDelatableFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    indexColumns: number
  ): void => {
    event.preventDefault();
    setTaskContent((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns[indexColumns] = {
        ...updatedColumns[indexColumns],
        name: event.target.value,
      };

      return {
        ...prevState,
        columns: updatedColumns,
      };
    });
  };

  const handleDeleteSubtask = (index: number): void => {
    setTaskContent((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns.splice(index, 1);

      return {
        ...prevState,
        columns: updatedColumns,
      };
    });
  };

  const addNewColumn = (): void => {
    setTaskContent((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns.push({ name: "", tasks: [] });

      return {
        ...prevState,
        columns: updatedColumns,
      };
    });
  };

  const handleCloseEditTaskModal = () => {
    onCloseEditOrAddBoardModal();
    setTaskContent(taskContentInitialValue);
  };

  useEffect(() => {
    setTaskContent(taskContentInitialValue);
  }, [taskContentInitialValue]);

  return (
    <DialogContainer
      customHeight="auto"
      open={openEditOrAddBoardModal}
      maxWidth="sm"
      fullWidth
      onClose={handleCloseEditTaskModal}
    >
      <Header>{contentTitle}</Header>

      <ContentContainer>
        <ContentTitle>Board Name</ContentTitle>
        <InputField
          onChange={handleBoardNameChange}
          value={taskContent.name}
          customWidth="416px"
          inputProps={{
            style: {
              height: "10px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ErrorLabel>
                  {taskContent.name === "" ? "Can't be empty" : ""}
                </ErrorLabel>
              </InputAdornment>
            ),
          }}
        />
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Board Columns</ContentTitle>
        {taskContent.columns.map((eachColumn, index) => (
          <DeletableField
            key={index + 1}
            placeholderText={eachColumn.name}
            value={eachColumn.name}
            indexSubtask={index}
            handleDelatableFieldChange={(event) =>
              handleDelatableFieldChange(event, index)
            }
            handleDeleteSubtask={() => handleDeleteSubtask(index)}
          />
        ))}
        <AddNewSubtaskButton onClick={addNewColumn}>
          + Add New Column
        </AddNewSubtaskButton>
      </ContentContainer>

      <ConfirmChangesButton
        onClick={() => handleSaveChanges(taskContent)}
        disabled={disabled}
      >
        {submitButtonLabel}
      </ConfirmChangesButton>
    </DialogContainer>
  );
};
