import {
  Container,
  CreateNewBoardButton,
  NoBoardsAvailableText,
} from "./styles";

export const NoBoardsAvailable = () => {
  return (
    <Container>
      <NoBoardsAvailableText variant="h5">
        There are no boards available. Create a new board to get started
      </NoBoardsAvailableText>
      <CreateNewBoardButton>+ Add New Board</CreateNewBoardButton>
    </Container>
  );
};
