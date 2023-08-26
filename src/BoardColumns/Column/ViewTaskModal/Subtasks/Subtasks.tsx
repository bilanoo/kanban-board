import { SubTasks } from "../../../../stores/BoardContent.store";
import { selectedTaskContentProps } from "../../Column";
import { GenericCheckbox } from "./GenericCheckbox/GenericCheckbox";
import { SubtaskTitle, SubtasksContainer, SubtasksList } from "./styles";

interface SubtaskProps {
  subtasks: SubTasks[];
  setSelectedTaskContent: React.Dispatch<
    React.SetStateAction<selectedTaskContentProps>
  >;
}

export const Subtasks = ({
  subtasks,
  setSelectedTaskContent,
}: SubtaskProps) => {
  const handleSubtaskClick = (index: number, isSelected: boolean) => {
    setSelectedTaskContent((prevState) => {
      const updatedSubtasks = [...prevState.subtasks];
      updatedSubtasks[index].isCompleted = isSelected;

      return {
        ...prevState,
        subtasks: updatedSubtasks,
      };
    });
  };

  return (
    <SubtasksContainer>
      <SubtaskTitle>Subtasks (2 of {subtasks.length})</SubtaskTitle>

      <SubtasksList>
        {subtasks.map((eachSubtask, indexPositionOfSubtask) => (
          <GenericCheckbox
            key={eachSubtask.title}
            textInformation={eachSubtask.title}
            isSelected={eachSubtask.isCompleted}
            handleSubtaskClick={(isSelected) =>
              handleSubtaskClick(indexPositionOfSubtask, isSelected)
            }
          />
        ))}
      </SubtasksList>
    </SubtasksContainer>
  );
};
