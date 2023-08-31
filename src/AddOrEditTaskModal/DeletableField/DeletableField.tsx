import { IconButton, InputAdornment } from "@mui/material";
import { InputField } from "../styles";
import iconCross from "../../assets/icon-cross.svg";
import { Container, ErrorLabel } from "./styles";

interface DeletableFieldProps {
  placeholderText: string;
  value: string;
  indexSubtask: number;
  handleDelatableFieldChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    indexSubtask: number
  ) => void;
  handleDeleteSubtask: (index: number) => void;
}

export const DeletableField = ({
  placeholderText,
  value,
  indexSubtask,
  handleDelatableFieldChange,
  handleDeleteSubtask,
}: DeletableFieldProps) => {
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ErrorLabel>{value === "" ? "Can't be empty" : ""}</ErrorLabel>
              </InputAdornment>
            ),
          }}
        ></InputField>
        <IconButton onClick={() => handleDeleteSubtask(indexSubtask)}>
          <img src={iconCross} alt="delete-subtask-icon" />
        </IconButton>
      </Container>
    </>
  );
};
