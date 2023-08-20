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

export const Column = () => {
  return (
    <Container className="each-column">
      <ContentContainer>
        <TaskContainer>
          <TaskColoredBall />
          <TaskName variant="h6">TODO (4)</TaskName>
        </TaskContainer>
        <PaperContainer elevation={0}>
          <TaskTitle variant="h6">Build UI for onboarding flow</TaskTitle>
          <AmountOfSubtasks>0 of 3 subtasks</AmountOfSubtasks>
        </PaperContainer>
      </ContentContainer>
    </Container>
  );
};
