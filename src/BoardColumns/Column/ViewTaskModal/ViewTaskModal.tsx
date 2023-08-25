import {
  DialogContainer,
  HeadingContainer,
  TaskInformationText,
  TaskTitle,
} from "./styles";
import verticalEllipsis from "../../../assets/icon-vertical-ellipsis.svg";
import { Subtasks } from "./Subtasks/Subtasks";

export const ViewTaskModal = () => {
  return (
    <DialogContainer open={true} maxWidth="sm">
      <HeadingContainer>
        <TaskTitle>
          Research pricing points of various competitors and trial different
          business models
        </TaskTitle>
      </HeadingContainer>

      <TaskInformationText>
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </TaskInformationText>

      <Subtasks />
    </DialogContainer>
  );
};
