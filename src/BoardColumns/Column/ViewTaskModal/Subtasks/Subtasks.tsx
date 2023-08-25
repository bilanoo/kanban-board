import { GenericCheckbox } from "./GenericCheckbox/GenericCheckbox";
import { SubtaskTitle, SubtasksContainer, SubtasksList } from "./styles";

export const Subtasks = () => {
  return (
    <SubtasksContainer>
      <SubtaskTitle>Subtasks (2 of 3)</SubtaskTitle>

      <SubtasksList>
        <GenericCheckbox textInformation="Research competitor pricing and business models" />
        <GenericCheckbox textInformation="Outline a business model that works for our solution" />
        <GenericCheckbox textInformation="Talk to potential customers about our proposed solution and ask for fair price expectancy" />
      </SubtasksList>
    </SubtasksContainer>
  );
};
