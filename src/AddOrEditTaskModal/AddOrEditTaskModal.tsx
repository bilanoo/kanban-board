import { useEffect, useState } from "react";
import {
  CurrentStatus,
  CurrentStatusProps,
} from "../BoardColumns/Column/ViewTaskModal/CurrentStatus/CurrentStatus";
import { DeletableField } from "./DeletableField/DeletableField";
import {
  DialogContainer,
  Header,
  ContentContainer,
  ContentTitle,
  InputField,
  InputDescription,
  SubtasksContainer,
  AddNewSubtaskButton,
  ConfirmChangesButton,
} from "./styles";
import { Tasks } from "../stores/BoardContent.store";

interface AddOrEditTaskModalProps extends CurrentStatusProps {
  taskContentInitialValue: Tasks;
  openEditTaskModal: boolean;
  onCloseEditTaskModal: () => void;
}

export const AddOrEditTaskModal = ({
  currentStatusValue,
  setSelectedTaskContent,
  taskContentInitialValue,
  openEditTaskModal,
  onCloseEditTaskModal,
}: AddOrEditTaskModalProps) => {
  const [taskContent, setTaskContent] = useState<Tasks>(
    taskContentInitialValue
  );

  console.log(taskContent);
  function handleTitleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  useEffect(() => {
    setTaskContent(taskContentInitialValue);
  }, [taskContentInitialValue]);

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setTaskContent((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  }

  return (
    <DialogContainer
      open={openEditTaskModal}
      maxWidth="sm"
      fullWidth
      onClose={onCloseEditTaskModal}
    >
      <Header>Add New Task</Header>

      <ContentContainer>
        <ContentTitle>Title</ContentTitle>
        <InputField
          value={taskContent.title}
          size="small"
          variant="outlined"
          placeholder="e.g. Take coffee break"
          customWidth="416px"
          onChange={handleTitleChange}
        ></InputField>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Description</ContentTitle>
        <InputDescription
          value={taskContent.description}
          onChange={handleDescriptionChange}
          size="medium"
          variant="outlined"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          maxRows={Infinity}
          multiline={true}
          inputProps={{
            style: {
              height: "112px",
            },
          }}
        ></InputDescription>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Subtasks</ContentTitle>
        <SubtasksContainer>
          {taskContent.subtasks.map((eachSubtask, index) => (
            <DeletableField
              key={eachSubtask.title}
              placeholderText={eachSubtask.title}
              value={eachSubtask.title}
              indexSubtask={index}
              setTaskContent={setTaskContent}
            />
          ))}
        </SubtasksContainer>
        <AddNewSubtaskButton>+Add New Subtask</AddNewSubtaskButton>
      </ContentContainer>

      <CurrentStatus
        statusLabel="Status"
        selectFieldWidth="416px"
        selectFieldHeight="40px"
        currentStatusValue={currentStatusValue}
        setSelectedTaskContent={setSelectedTaskContent}
      />

      <ConfirmChangesButton>Save Changes</ConfirmChangesButton>
    </DialogContainer>
  );
};
