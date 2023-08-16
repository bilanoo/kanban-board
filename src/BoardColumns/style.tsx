import { Button, Typography, styled } from "@mui/material";

export const NoColumnsContainer = styled("div")(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const NoColumnsTextInfo = styled(Typography)(() => ({
  "&": {
    fontSize: "18px",
    fontWeight: "700",
    color: "var(--lighter-grey)",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
}));

export const AddNewColumn = styled(Button)(() => ({
  "&": {
    backgroundColor: "var(--dark-purple)",
    borderRadius: "24px",
    width: "164px",
    height: "53px",
    color: "var(--white)",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "none",
  },
  "&:hover": {
    backgroundColor: "var(--light-purple)",
  },
  "&.Mui-disabled": {
    color: "var(--white)",
    backgroundColor: "var(--light-purple)",
  },
}));
