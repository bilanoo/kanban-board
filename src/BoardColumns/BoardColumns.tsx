import { Column } from "./Column/Column";
import {
  AddNewColumnButton,
  ContentFoundContainer,
  NoColumnsContainer,
  NoColumnsTextInfo,
} from "./style";
import useBoardContentStore, {
  SelectedBoardContent,
  useSelectedBoardContent,
} from "../stores/BoardContent.store";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { AddNewColumn } from "./AddNewColumn";
import { AddOrEditBoardModal } from "../AddOrEditBoardModal/AddOrEditBoardModal";
import { useState } from "react";

export const BoardColumns = () => {
  const [openEditBoardModal, setOpenEditBoardModal] = useState<boolean>(false);
  const selectedBoardContent = useSelectedBoardContent();

  const actions = useBoardContentStore((state) => state.actions);

  function handleDragEnd(result: DropResult): void {
    actions.updateSelectedBoardContentOnDragEnd(result);
    actions.updateKanbanDataAfterMovingTask();
  }

  const handleCloseEditBoardModal = () => {
    setOpenEditBoardModal(false);
  };

  const handleOpenEditBoardModal = () => {
    setOpenEditBoardModal(true);
  };

  function handleSaveChanges(taskContent: SelectedBoardContent): void {
    actions.setSelectedBoardContent(taskContent);
    handleCloseEditBoardModal();
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
          <AddNewColumn handleAddNewColumnClick={handleOpenEditBoardModal} />
        </ContentFoundContainer>
      ) : (
        <NoColumnsContainer className="board-content">
          <NoColumnsTextInfo>
            This board is empty. Create a new column to get started.
          </NoColumnsTextInfo>
          <AddNewColumnButton onClick={handleOpenEditBoardModal}>
            + Add New Column
          </AddNewColumnButton>
        </NoColumnsContainer>
      )}
      <AddOrEditBoardModal
        handleSaveChanges={handleSaveChanges}
        openEditOrAddBoardModal={openEditBoardModal}
        taskContentInitialValue={selectedBoardContent}
        contentTitle="Edit Board"
        submitButtonLabel="Save Changes"
        onCloseEditOrAddBoardModal={handleCloseEditBoardModal}
      />
    </>
  );
};
