import { useState } from "react";
import {
  Container,
  CustomControlLabel,
  CustomCheckbox,
  SubtaskInformation,
} from "./styles";

interface GenericCheckboxProps {
  textInformation: string;
}

export const GenericCheckbox = ({ textInformation }: GenericCheckboxProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  return (
    <Container>
      <CustomControlLabel
        control={<CustomCheckbox />}
        label={<SubtaskInformation>{textInformation}</SubtaskInformation>}
      />
    </Container>
  );
};
