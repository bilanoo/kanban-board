import { Button, Typography, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.custom.borderColor}`,
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

export const BoardSelected = styled(Typography)(({ theme }) => ({
  "&": {
    marginLeft: "210px",
    fontSize: "22px",
    fontWeight: 700,
    color: theme.palette.text.secondary,
  },
}));

export const AddNewTask = styled(Button)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "24px",
    width: "164px",
    height: "53px",
    color: theme.custom.white,
    fontSize: "15px",
    fontWeight: 700,
    textTransform: "none",
    marginLeft: "auto",
  },
  "&:hover": {
    backgroundColor: theme.custom.lightPurple,
  },
  "&.Mui-disabled": {
    color: theme.custom.white,
    backgroundColor: theme.custom.lightPurple,
  },
}));
