import { Box, Dialog, Typography, styled } from "@mui/material";

export const DialogContainer = styled(Dialog)(({ theme }) => ({
  "&": {
    justifyContent: "center",
    alignItems: "center",
  },
  "& > .MuiDialog-container > .MuiPaper-root": {
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    maxWidth: "auto",
  },
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    margin: "32px 24px 24px 32px",
    color: theme.palette.text.secondary,
    alignItems: "center",
    width: "85%",
    justifyContent: "space-between",
  },
}));

export const TaskTitle = styled(Typography)(() => ({
  "&": {
    fontSize: "18px",
    fontWeight: 700,
    maxWidth: "387px",
    padding: "0",
  },
}));

export const TaskInformationText = styled(Typography)(() => ({
  "&": {
    fontSize: "13px",
    fontWeight: 500,
    maxWidth: "387px",
    lineHeight: "23px",
    margin: "0 32px 24px 32px",
  },
}));
