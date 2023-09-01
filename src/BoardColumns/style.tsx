import { Button, Typography, styled } from "@mui/material";

export const NoColumnsContainer = styled("div")(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: theme.custom.columnContentColor,
  },
}));

export const NoColumnsTextInfo = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "18px",
    fontWeight: "700",
    color: theme.custom.mediumGrey,
    paddingLeft: "24px",
    paddingRight: "24px",
    marginBottom: "20px",
  },
}));

export const AddNewColumnButton = styled(Button)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "24px",
    width: "164px",
    height: "53px",
    color: theme.custom.white,
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "none",
  },
  "&:hover": {
    backgroundColor: theme.custom.lightPurple,
  },
  "&.Mui-disabled": {
    color: theme.custom.white,
    backgroundColor: theme.custom.lightPurple,
  },
}));

export const ContentFoundContainer = styled("div")(({ theme }) => ({
  "&": {
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: theme.custom.columnContentColor,
    overflow: "auto",
  },
}));
