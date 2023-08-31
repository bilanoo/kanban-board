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
import { SelectedBoardContent } from "../stores/BoardContent.store";
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

  function handleBoardNameChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  }

  function areRequiredFieldsFilled(): boolean {
    const areAnyOfTheColumnssWithoutAName = taskContent.columns.every(
      (eachColumn) => eachColumn.name === ""
    );

    return (
      (!areAnyOfTheColumnssWithoutAName || taskContent.columns.length === 0) &&
      taskContent.name !== ""
    );
  }

  function handleDelatableFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    indexColumns: number
  ): void {
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
  }

  function handleDeleteSubtask(index: number): void {
    setTaskContent((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns.splice(index, 1);

      return {
        ...prevState,
        columns: updatedColumns,
      };
    });
  }

  function addNewColumn(): void {
    setTaskContent((prevState) => {
      const updatedColumns = [...prevState.columns];
      updatedColumns.push({ name: "", tasks: [] });

      return {
        ...prevState,
        columns: updatedColumns,
      };
    });
  }

  useEffect(() => {
    setTaskContent(taskContentInitialValue);
  }, [taskContentInitialValue]);

  return (
    <DialogContainer
      customHeight="auto"
      open={openEditOrAddBoardModal}
      maxWidth="sm"
      fullWidth
      onClose={onCloseEditOrAddBoardModal}
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
        onClick={
          areRequiredFieldsFilled()
            ? () => handleSaveChanges(taskContent)
            : undefined
        }
      >
        {submitButtonLabel}
      </ConfirmChangesButton>
    </DialogContainer>
  );
};
