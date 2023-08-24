import { Column } from "./Column/Column";
import {
  AddNewColumnButton,
  ContentFoundContainer,
  NoColumnsContainer,
  NoColumnsTextInfo,
} from "./style";
import useBoardContentStore, {
  useSelectedBoardContent,
} from "../stores/BoardContent.store";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { AddNewColumn } from "./AddNewColumn";

export const BoardColumns = () => {
  const selectedBoardContent = useSelectedBoardContent();

  const actions = useBoardContentStore((state) => state.actions);

  function handleDragEnd(result: DropResult): void {
    actions.updateSelectedBoardContentOnDragEnd(result);
    actions.updateKanbanDataAfterMovingTask();
  }

  return (
    <>
      {selectedBoardContent.columns.length ? (
        <ContentFoundContainer>
          <DragDropContext onDragEnd={handleDragEnd}>
            {selectedBoardContent.columns.map((eachTask) => (
              <Column eachBoard={eachTask} key={eachTask.name} />
            ))}
          </DragDropContext>
          <AddNewColumn />
        </ContentFoundContainer>
      ) : (
        <NoColumnsContainer className="board-content">
          <NoColumnsTextInfo>
            This board is empty. Create a new column to get started.
          </NoColumnsTextInfo>
          <AddNewColumnButton> + Add New Column</AddNewColumnButton>
        </NoColumnsContainer>
      )}
    </>
  );
};
