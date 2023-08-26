import {
  Container,
  CustomControlLabel,
  CustomCheckbox,
  SubtaskInformation,
} from "./styles";

interface GenericCheckboxProps {
  textInformation: string;
  isSelected: boolean;
  handleSubtaskClick: (isSelected: boolean) => void;
}

export const GenericCheckbox = ({
  textInformation,
  isSelected,
  handleSubtaskClick,
}: GenericCheckboxProps) => {
  const handleChange = () => {
    handleSubtaskClick(!isSelected);
  };
  return (
    <Container>
      <CustomControlLabel
        control={<CustomCheckbox checked={isSelected} />}
        label={
          <SubtaskInformation isSelected={isSelected}>
            {textInformation}
          </SubtaskInformation>
        }
        onChange={handleChange}
      />
    </Container>
  );
};
