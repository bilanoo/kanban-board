import { Draggable, Droppable } from "react-beautiful-dnd";
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
        <Droppable droppableId={eachBoard.name}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ minHeight: "100%" }}
            >
              {eachBoard.tasks.map((everyTask: Tasks, taskIndex: number) => (
                <Draggable
                  key={everyTask.title}
                  draggableId={everyTask.title}
                  index={taskIndex}
                >
                  {(provided) => (
                    <PaperContainer
                      elevation={0}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TaskTitle variant="h6">{everyTask.title}</TaskTitle>
                      <AmountOfSubtasks>
                        0 of {everyTask.subtasks.length} subtasks
                      </AmountOfSubtasks>
                    </PaperContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ContentContainer>
    </Container>
  );
};
