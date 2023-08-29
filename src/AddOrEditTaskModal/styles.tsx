import { Box, Dialog, TextField, Typography, styled } from "@mui/material";

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
    margin: "0px 32px 24px 32px",
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

export const InputTaskTitle = styled(TextField)(({ theme }) => ({
  "&": {
    width: "416px",
    borderRadius: "4px",
  },

  input: {
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
  input: {
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
