import BoardIcon from "../../assets/icon-board.svg";
import {
  AllBoardsText,
  BoardContent,
  BoardList,
  BoardText,
  Container,
  CreateNewBoard,
  EachBoard,
  IconContent,
} from "./BoardStyles";
import useBoardContentStore, {
  SelectedBoardContent,
  useKanbanData,
  useSelectedBoard,
} from "../../stores/BoardContent.store";
import { useState } from "react";
import { AddOrEditBoardModal } from "../../AddOrEditBoardModal/AddOrEditBoardModal";
export const Boards = () => {
  const actions = useBoardContentStore((state) => state.actions);
  const kanbanData = useKanbanData();
  const selectedBoard = useSelectedBoard();

  const [openEditBoardModal, setOpenEditBoardModal] = useState<boolean>(false);

  const initialNewBoardContent: SelectedBoardContent = {
    name: "",
    columns: [
      { name: "Todo", tasks: [] },
      { name: "Doing", tasks: [] },
    ],
  };

  const setSelectedBoardValues = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedBoardContent = kanbanData.boards.filter(
      (EachBoard) => EachBoard.name === event.currentTarget.id
    );
    actions.setSelectedBoard(event.currentTarget.id);
    actions.setSelectedBoardContent(selectedBoardContent[0]);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setSelectedBoardValues(event);
  };

  const handleOpenEditBoardModal = () => {
    setOpenEditBoardModal(true);
  };

  const handleCloseEditBoardModal = () => {
    setOpenEditBoardModal(false);
  };

  function handleEditBoardSaveChanges(taskContent: SelectedBoardContent): void {
    actions.addBoardToKanbanData(taskContent);
    handleCloseEditBoardModal();
  }

  return (
    <>
      <Container className="boards-container">
        <AllBoardsText variant="h6">
          ALL BOARDS ({kanbanData.boards.length})
        </AllBoardsText>

        <BoardList>
          {kanbanData.boards.map((board) => (
            <EachBoard key={board.name}>
              <BoardContent
                selected={board.name === selectedBoard}
                onClick={(event) => handleListItemClick(event)}
                id={board.name}
              >
                <IconContent>
                  <img src={BoardIcon} alt="board-icon" />
                </IconContent>
                <BoardText primary={board.name} />
              </BoardContent>
            </EachBoard>
          ))}
        </BoardList>

        <CreateNewBoard
          onClick={handleOpenEditBoardModal}
          startIcon={
            <img src={BoardIcon} alt="board-icon" className="board-icon" />
          }
        >
          + Create New Board
        </CreateNewBoard>
      </Container>

      <AddOrEditBoardModal
        handleSaveChanges={handleEditBoardSaveChanges}
        openEditOrAddBoardModal={openEditBoardModal}
        taskContentInitialValue={initialNewBoardContent}
        contentTitle="Add New Board"
        submitButtonLabel="Create New Board"
        onCloseEditOrAddBoardModal={handleCloseEditBoardModal}
      />
    </>
  );
};
