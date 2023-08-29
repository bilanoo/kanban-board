import {
  DialogContainer,
  Header,
  ContentContainer,
  ContentTitle,
  InputTaskTitle,
  InputDescription,
} from "./styles";

export const AddOrEditTaskModal = () => {
  return (
    <DialogContainer open={true} maxWidth="sm" fullWidth>
      <Header>Add New Task</Header>

      <ContentContainer>
        <ContentTitle>Title</ContentTitle>
        <InputTaskTitle
          size="small"
          variant="outlined"
          placeholder="e.g. Take coffee break"
        ></InputTaskTitle>
      </ContentContainer>

      <ContentContainer>
        <ContentTitle>Description</ContentTitle>
        <InputDescription
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
    </DialogContainer>
  );
};
