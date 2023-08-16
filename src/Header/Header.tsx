import { EditOrDeleteBoard } from "./EditOrDeleteBoard/EditOrDeleteBoard";
import { Container, BoardSelected, AddNewTask } from "./style";

export const Header = () => {
  return (
    <Container>
      <BoardSelected variant="h6">Platform Launch</BoardSelected>
      <AddNewTask disabled> + Add New Task</AddNewTask>
      <EditOrDeleteBoard />
    </Container>
  );
};
