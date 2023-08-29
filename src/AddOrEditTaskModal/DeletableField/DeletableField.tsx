import { IconButton } from "@mui/material";
import { InputField } from "../styles";
import iconCross from "../../assets/icon-cross.svg";
import { Container } from "./styles";

interface DeletableFieldProps {
  placeholderText: string;
}

export const DeletableField = ({ placeholderText }: DeletableFieldProps) => {
  return (
    <>
      <Container>
        <InputField
          customWidth="385px"
          variant="outlined"
          placeholder={placeholderText}
          size="small"
        ></InputField>
        <IconButton>
          <img src={iconCross} alt="delete-subtask-icon" />
        </IconButton>
      </Container>
    </>
  );
};
