import { Container, AddNewColumnText } from "./style";

interface AddNewColumnProps {
  handleAddNewColumnClick: () => void;
}

export const AddNewColumn = ({
  handleAddNewColumnClick,
}: AddNewColumnProps) => {
  return (
    <Container onClick={handleAddNewColumnClick}>
      <AddNewColumnText>+ New Column</AddNewColumnText>
    </Container>
  );
};
