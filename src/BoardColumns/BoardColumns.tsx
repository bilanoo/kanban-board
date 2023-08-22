import { Column } from "./Column/Column";
import {
  AddNewColumn,
  ContentFoundContainer,
  NoColumnsContainer,
  NoColumnsTextInfo,
} from "./style";
import useBoardContentStore, {
  useSelectedBoardContent,
} from "../stores/BoardContent.store";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

export const BoardColumns = () => {
  const selectedBoardContent = useSelectedBoardContent();

  const actions = useBoardContentStore((state) => state.actions);

  console.log(selectedBoardContent);

  function handleDragEnd(
    result: DropResult,
    provided: ResponderProvided
  ): void {
    actions.updateSelectedBoardContentOnDragEnd(result);
  }

  return (
    <>
      {selectedBoardContent.columns.length ? (
        <ContentFoundContainer>
          <DragDropContext onDragEnd={handleDragEnd}>
            {selectedBoardContent.columns.map((eachTask, index) => (
              <Column eachBoard={eachTask} key={eachTask.name} />
            ))}
          </DragDropContext>
        </ContentFoundContainer>
      ) : (
        <NoColumnsContainer className="board-content">
          <NoColumnsTextInfo>
            This board is empty. Create a new column to get started.
          </NoColumnsTextInfo>
          <AddNewColumn> + Add New Column</AddNewColumn>
        </NoColumnsContainer>
      )}
    </>
  );
};
