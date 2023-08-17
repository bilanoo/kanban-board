import { Button, Typography, styled } from "@mui/material";

export const Container = styled("div")(() => ({
  "&": {
    borderBottom: "1px solid var(--pastel-grey)",
    display: "flex",
    alignItems: "center",
    minHeight: "80px",
  },
}));

export const LogoContainer = styled("div")(() => ({
  "&": {
    display: "flex",
    alignItems: "center",
    marginLeft: "26px",
  },
}));

export const LogoName = styled("h1")(() => ({
  "&": {
    fontWeight: "bold",
    color: "var(--black)",
  },
}));

export const BoardSelected = styled(Typography)(() => ({
  "&": {
    marginLeft: "95px",
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--black)",
  },
}));

export const AddNewTask = styled(Button)(() => ({
  "&": {
    backgroundColor: "var(--dark-purple)",
    borderRadius: "24px",
    width: "164px",
    height: "53px",
    color: "var(--white)",
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "none",
    marginLeft: "auto",
  },
  "&:hover": {
    backgroundColor: "var(--light-purple)",
  },
  "&.Mui-disabled": {
    color: "var(--white)",
    backgroundColor: "var(--light-purple)",
  },
}));
