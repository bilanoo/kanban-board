import { AddNewColumn, NoColumnsContainer, NoColumnsTextInfo } from "./style";

export const BoardColumns = () => {
  return (
    <NoColumnsContainer className="board-content">
      <NoColumnsTextInfo>
        This board is empty. Create a new column to get started.
      </NoColumnsTextInfo>
      <AddNewColumn> + Add New Column</AddNewColumn>
    </NoColumnsContainer>
  );
};
