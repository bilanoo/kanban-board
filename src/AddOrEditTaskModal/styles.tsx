import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

export const DialogContainer = styled(Dialog)(({ theme }) => ({
  "&": {
    justifyContent: "center",
    alignItems: "center",
  },
  "& > .MuiDialog-container > .MuiPaper-root": {
    alignItems: "start",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    maxWidth: "480px",
    minHeight: "675px",
  },
}));

export const Header = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: "normal",
    margin: "32px 0 24px 32px",
    color: theme.palette.text.secondary,
  },
}));

export const ContentContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "0px 0px 24px 32px",
  },
}));

export const ContentTitle = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.75rem",
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.palette.text.primary,
  },
}));

interface InputFieldProps {
  customWidth: string;
}

export const InputField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "customWidth",
})<InputFieldProps>(({ theme, customWidth }) => ({
  "&": {
    width: customWidth,
    borderRadius: "4px",
  },

  input: {
    fontSize: "0.813rem",
    "&::placeholder": {
      fontSize: "0.813rem",
    },
  },
  "& .MuiOutlinedInput-root": {
    color: theme.palette.text.secondary,
    "& fieldset": {
      borderColor: "rgba(130, 143, 163, 0.25)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(130, 143, 163, 0.25)",
    },
  },
}));

export const InputDescription = styled(TextField)(({ theme }) => ({
  "&": {
    width: "416px",
    borderRadius: "4px",
  },
  "& .MuiFilledInput-root": {},
  textarea: {
    fontSize: "0.813rem",
    "&::placeholder": {
      fontSize: "0.813rem",
    },
  },
  "& .MuiOutlinedInput-root": {
    color: theme.palette.text.secondary,
    "& fieldset": {
      borderColor: "rgba(130, 143, 163, 0.25)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(130, 143, 163, 0.25)",
    },
  },
}));

export const SubtasksContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
}));

export const AddNewSubtaskButton = styled(Button)(({ theme }) => ({
  "&": {
    backgroundColor: theme.custom.cancelButtonBackgroundColor,
    borderRadius: "24px",
    width: "416px",
    height: "40px",
    color: theme.palette.primary.contrastText,
    fontSize: "0.813rem",
    fontWeight: 700,
    textTransform: "none",
    marginTop: "8px",
  },
  "&:hover": {
    backgroundColor: theme.custom.onHoverCancelButton,
  },
}));

export const ConfirmChangesButton = styled(Button)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "24px",
    width: "416px",
    height: "40px",
    color: theme.custom.white,
    fontSize: "0.813rem",
    fontWeight: 700,
    textTransform: "none",
    alignSelf: "center",
    marginBottom: "32px",
  },
  "&:hover": {
    backgroundColor: theme.custom.lightPurple,
  },
}));
