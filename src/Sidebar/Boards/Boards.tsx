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
export const Boards = () => {
  const [selected, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
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
