import {
  Container,
  BoardSelected,
  AddNewTask,
  EditOrDeleteBoard,
} from "./style";
import VerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";

export const Header = () => {
  return (
    <Container>
      <BoardSelected variant="h6">Platform Launch</BoardSelected>
      <AddNewTask disabled> + Add New Task</AddNewTask>
      <EditOrDeleteBoard>
        <img src={VerticalEllipsis} alt="edit or delete board button" />
      </EditOrDeleteBoard>
    </Container>
  );
};
