import { useCurrentMode } from "../stores/LightOrDarkMode.store";
import { getDesignTokens } from "../theme";
import {
  ButtonsContainer,
  DeleteConfirmationDescription,
  DeleteConfirmationHeading,
  DialogContainer,
  GenericButton,
} from "./styles";

export const DeleteConfirmationModal = () => {
  const lightOrDarkMode = useCurrentMode();
  const theme = getDesignTokens(lightOrDarkMode);
  return (
    <DialogContainer open={true} fullWidth>
      <DeleteConfirmationHeading>Delete this board?</DeleteConfirmationHeading>
      <DeleteConfirmationDescription>
        Are you sure you want to delete the 'Build settings UI' task and its
        subtasks? This action cannot be reversed.
      </DeleteConfirmationDescription>

      <ButtonsContainer>
        <GenericButton
          backgroundColorApplied={theme.custom.delete}
          textColor={theme.custom.white}
          onHoverColor={theme.custom.onHoverDelete}
        >
          Delete
        </GenericButton>
        <GenericButton
          backgroundColorApplied={theme.custom.cancelButtonBackgroundColor}
          textColor={theme.palette.primary.contrastText}
          onHoverColor={theme.custom.onHoverCancelButton}
        >
          Cancel
        </GenericButton>
      </ButtonsContainer>
    </DialogContainer>
  );
};
