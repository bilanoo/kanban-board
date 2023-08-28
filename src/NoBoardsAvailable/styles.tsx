import { Box, Button, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const NoBoardsAvailableText = styled(Typography)(({ theme }) => ({
  "&": {
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.palette.text.primary,
  },
}));

export const CreateNewBoardButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "174px",
    height: "48px",
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "24px",
  },
  "&:hover": {
    backgroundColor: theme.custom.lightPurple,
  },
}));
