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

  const returnAmountOfRemainingSubtasks = () => {
    const amountOfSubtasksToFinish = subtasks.filter(
      (eachSubtask) => eachSubtask.isCompleted === false
    );

    return amountOfSubtasksToFinish.length;
  };
  return (
    <SubtasksContainer>
      <SubtaskTitle>
        Subtasks ({returnAmountOfRemainingSubtasks()} of {subtasks.length})
      </SubtaskTitle>

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
