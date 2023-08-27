import { Box, Button, Dialog, Typography, styled } from "@mui/material";

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
    minHeight: "229px",
  },
}));

export const DeleteConfirmationHeading = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: "normal",
    color: theme.custom.delete,
    margin: "32px 0 24px 32px",
  },
}));

export const DeleteConfirmationDescription = styled(Typography)(
  ({ theme }) => ({
    "&": {
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "23px",
      color: theme.custom.mediumGrey,
      margin: "0 32px 24px 32px",
    },
  })
);

export const ButtonsContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 32px 40px 32px",
  },
}));

interface GenericButtonProps {
  backgroundColorApplied: string;
  textColor: string;
  onHoverColor: string;
}
export const GenericButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColorApplied" &&
    prop !== "textColor" &&
    prop !== "onHoverColor",
})<GenericButtonProps>(
  ({ backgroundColorApplied, textColor, onHoverColor }) => ({
    "&": {
      width: "200px",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: backgroundColorApplied,
      fontSize: "0.813rem",
      fontWeight: 700,
      textTransform: "none",
      color: textColor,
    },
    "&:hover": {
      backgroundColor: onHoverColor,
    },
  })
);
