import { IconButton } from "@mui/material";
import { InputField } from "../styles";
import iconCross from "../../assets/icon-cross.svg";
import { Container } from "./styles";
import { Tasks } from "../../stores/BoardContent.store";

interface DeletableFieldProps {
  placeholderText: string;
  value: string;
  setTaskContent: React.Dispatch<React.SetStateAction<Tasks>>;
  indexSubtask: number;
}

export const DeletableField = ({
  placeholderText,
  value,
  indexSubtask,
  setTaskContent,
}: DeletableFieldProps) => {
  function handleDelatableFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    indexSubtask: number
  ): void {
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
  }

  function handleDeleteSubtask(index: number): void {
    setTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks]; // Create a copy of the subtasks array
      updatedSubtasks.splice(index, 1); // Remove the subtask at the specified index

      return {
        ...prevState,
        subtasks: updatedSubtasks, // Update the subtasks array with the modified copy
      };
    });
  }

  return (
    <>
      <Container>
        <InputField
          value={value}
          onChange={(event) => handleDelatableFieldChange(event, indexSubtask)}
          customWidth="385px"
          variant="outlined"
          placeholder={placeholderText}
          size="small"
          error={value === ""}
          helperText={value === "" ? "This field cannot be empty" : ""}
        ></InputField>
        <IconButton onClick={() => handleDeleteSubtask(indexSubtask)}>
          <img src={iconCross} alt="delete-subtask-icon" />
        </IconButton>
      </Container>
    </>
  );
};
