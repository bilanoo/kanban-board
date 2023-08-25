import { Box, Typography, styled } from "@mui/material";

export const SubtasksContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    margin: "0 32px 24px 32px",
    color: theme.palette.text.secondary,
    width: "387px",
  },
}));

export const SubtaskTitle = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "12px",
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: "16px",
  },
}));

export const SubtasksList = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
}));
