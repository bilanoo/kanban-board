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
import boardData from "../../data.json";
import { useState } from "react";
import useBoardContentStore from "../../stores/BoardContent.store";
import kanbanData from "../../data.json";
export const Boards = () => {
  const [selected, setSelectedIndex] = useState(0);

  const actions = useBoardContentStore((state) => state.actions);

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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setSelectedBoardValues(event);
  };

  return (
    <>
      <Container className="boards-container">
        <AllBoardsText variant="h6">
          ALL BOARDS ({boardData.boards.length})
        </AllBoardsText>

        <BoardList>
          {boardData.boards.map((board, index) => (
            <EachBoard key={board.name}>
              <BoardContent
                selected={selected === index}
                onClick={(event) => handleListItemClick(event, index)}
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
