import { useCurrentMode } from "../stores/LightOrDarkMode.store";
import { getDesignTokens } from "../theme";
import {
  ButtonsContainer,
  DeleteConfirmationDescription,
  DeleteConfirmationHeading,
  DialogContainer,
  GenericButton,
} from "./styles";

interface DeleteConfirmationModalProps {
  typeOfDeletion: string;
  confirmationDescription: string;
  displayDeleteTaskDialog: boolean;
  onClose: () => void;
  handleCancelButtonClick: () => void;
}

export const DeleteConfirmationModal = ({
  typeOfDeletion,
  confirmationDescription,
  displayDeleteTaskDialog,
  onClose,
  handleCancelButtonClick,
}: DeleteConfirmationModalProps) => {
  const lightOrDarkMode = useCurrentMode();
  const theme = getDesignTokens(lightOrDarkMode);
  return (
    <DialogContainer open={displayDeleteTaskDialog} fullWidth onClose={onClose}>
      <DeleteConfirmationHeading>
        Delete this {typeOfDeletion}?
      </DeleteConfirmationHeading>
      <DeleteConfirmationDescription>
        {confirmationDescription}
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
          onClick={handleCancelButtonClick}
        >
          Cancel
        </GenericButton>
      </ButtonsContainer>
    </DialogContainer>
  );
};
