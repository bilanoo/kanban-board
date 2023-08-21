import { Column } from "./Column/Column";
import {
  AddNewColumn,
  ContentFoundContainer,
  NoColumnsContainer,
  NoColumnsTextInfo,
} from "./style";
import { useSelectedBoardContent } from "../stores/BoardContent.store";

export const BoardColumns = () => {
  const selectedBoardContent = useSelectedBoardContent();

  return (
    // <NoColumnsContainer className="board-content">
    //   <NoColumnsTextInfo>
    //     This board is empty. Create a new column to get started.
    //   </NoColumnsTextInfo>
    //   <AddNewColumn> + Add New Column</AddNewColumn>
    // </NoColumnsContainer>
    <>
      <ContentFoundContainer>
        {selectedBoardContent.columns.map((eachTask) => (
          <Column eachBoard={eachTask} key={eachTask.name} />
        ))}
      </ContentFoundContainer>
    </>
  );
};
