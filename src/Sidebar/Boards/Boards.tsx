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
  useKanbanData,
  useSelectedBoard,
} from "../../stores/BoardContent.store";
export const Boards = () => {
  const actions = useBoardContentStore((state) => state.actions);
  const kanbanData = useKanbanData();
  const selectedBoard = useSelectedBoard();

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
          startIcon={
            <img src={BoardIcon} alt="board-icon" className="board-icon" />
          }
        >
          + Create New Board
        </CreateNewBoard>
      </Container>
    </>
  );
};
