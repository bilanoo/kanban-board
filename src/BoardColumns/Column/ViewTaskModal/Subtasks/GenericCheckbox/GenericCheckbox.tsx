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
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleClick(
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ): void {
    setIsSelected(!isSelected);
  }

  return (
    <Container>
      <CustomControlLabel
        control={<CustomCheckbox />}
        label={
          <SubtaskInformation isSelected={isSelected}>
            {textInformation}
          </SubtaskInformation>
        }
        onChange={handleClick}
      />
    </Container>
  );
};
