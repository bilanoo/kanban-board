import { Draggable, Droppable } from "react-beautiful-dnd";
import useBoardContentStore, {
  Columns,
  Tasks,
} from "../../stores/BoardContent.store";
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
import { ViewTaskModal } from "./ViewTaskModal/ViewTaskModal";
import { useMemo, useState } from "react";
import { DeleteConfirmationModal } from "../../DeleteConfirmationModal/DeleteConfirmationModal";

interface ColumnProps {
  eachBoard: Columns;
}
export interface selectedTaskContentProps extends Tasks {
  columnName: string;
  taskIndex: number;
}
export const Column = ({ eachBoard }: ColumnProps) => {
  const actions = useBoardContentStore((state) => state.actions);
  const [openTaskModal, setOpenTaskModal] = useState<boolean>(false);
  const [displayDeleteTaskDialog, setDisplayDeleteTaskDialog] =
    useState<boolean>(false);
  const [selectedTaskContent, setSelectedTaskContent] =
    useState<selectedTaskContentProps>({
      columnName: eachBoard.name,
      description: "",
      status: "",
      subtasks: [],
      title: "",
      taskIndex: 0,
    });

  const memoizedSelectedTaskContent = useMemo(
    () => selectedTaskContent,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedTaskContent.description,
      selectedTaskContent.status,
      selectedTaskContent.subtasks,
      selectedTaskContent.title,
      selectedTaskContent.taskIndex,
    ]
  );
  const handleOpenTaskModal = (
    taskSelected: Tasks,
    taskSelectedIndex: number
  ) => {
    setSelectedTaskContent((prevState) => ({
      ...prevState,
      description: taskSelected.description,
      status: taskSelected.status,
      subtasks: taskSelected.subtasks,
      title: taskSelected.title,
      taskIndex: taskSelectedIndex,
    }));
    setOpenTaskModal(true);
  };

  const handleCloseTaskModal = () => {
    actions.updateSelectedBoardContentOnClose(selectedTaskContent);
    setOpenTaskModal(false);
  };

  const onCloseConfirmationDelitionModal = () => {
    setOpenTaskModal(false);
    setDisplayDeleteTaskDialog(false);
  };

  const handleOpenConfirmationDelitionModal = () => {
    setOpenTaskModal(false);
    setDisplayDeleteTaskDialog(true);
  };

  const handleCancelButtonClick = () => {
    setDisplayDeleteTaskDialog(false);
    setOpenTaskModal(true);
  };

  const handleDeleteButtonClick = () => {
    actions.deleteTaskFromCurrentColumn(
      selectedTaskContent.taskIndex,
      selectedTaskContent.columnName
    );
    setDisplayDeleteTaskDialog(false);
  };
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
                      onClick={() => handleOpenTaskModal(everyTask, taskIndex)}
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
      <DeleteConfirmationModal
        handleDeleteButtonClick={handleDeleteButtonClick}
        handleCancelButtonClick={handleCancelButtonClick}
        displayDeleteTaskDialog={displayDeleteTaskDialog}
        typeOfDeletion="task"
        confirmationDescription={`Are you sure you want to delete the '${selectedTaskContent.title}' task and its subtasks? This action cannot be reversed.`}
        onClose={onCloseConfirmationDelitionModal}
      />
      <ViewTaskModal
        selectedTaskContent={memoizedSelectedTaskContent}
        openTaskModal={openTaskModal}
        onClose={handleCloseTaskModal}
        setSelectedTaskContent={setSelectedTaskContent}
        handleOpenConfirmationDelitionModal={
          handleOpenConfirmationDelitionModal
        }
      />
    </Container>
  );
};
