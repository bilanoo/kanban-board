import "./Boards.css";
import BoardIcon from "../../assets/icon-board.svg";
import HideSidebarIcon from "../../assets/icon-hide-sidebar.svg";
import {
  BoardContent,
  BoardList,
  BoardText,
  CreateNewBoard,
  EachBoard,
  IconContent,
} from "./BoardStyles";
import boardData from "../../data.json";
import { useState } from "react";
import { DarkOrLightMode } from "./DarkOrLightMode/DarkOrLightMode";
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
      <div className="boards-container">
        <h5>ALL BOARDS (3)</h5>

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
      </div>
      <DarkOrLightMode />
      <CreateNewBoard
        startIcon={<img src={HideSidebarIcon} alt="hide sidebar" />}
      >
        Hide Sidebar
      </CreateNewBoard>
    </>
  );
};
