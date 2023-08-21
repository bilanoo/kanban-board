import { Columns, Tasks } from "../../stores/BoardContent.store";
import {
  TaskColoredBall,
  Container,
  ContentContainer,
  TaskContainer,
  TaskName,
  PaperContainer,
  TaskTitle,
  AmountOfSubtasks,
} from "./style";

interface ColumnProps {
  eachBoard: Columns;
}

export const Column = ({ eachBoard }: ColumnProps) => {
  return (
    <Container className="each-column">
      <ContentContainer>
        <TaskContainer>
          <TaskColoredBall
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          />
          <TaskName variant="h6">
            {eachBoard.name} ({eachBoard.tasks.length})
          </TaskName>
        </TaskContainer>
        {eachBoard.tasks.map((everyTask: Tasks) => (
          <PaperContainer elevation={0} key={everyTask.title}>
            <TaskTitle variant="h6">{everyTask.title}</TaskTitle>
            <AmountOfSubtasks>
              0 of {everyTask.subtasks.length} subtasks
            </AmountOfSubtasks>
          </PaperContainer>
        ))}
      </ContentContainer>
    </Container>
  );
};
