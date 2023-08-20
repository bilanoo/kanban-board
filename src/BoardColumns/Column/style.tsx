import { Paper, Typography, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  "&": {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.custom.columnContentColor,
  },
}));

export const ContentContainer = styled("div")(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "100%",
    marginTop: "24px",
    marginLeft: "24px",
  },
}));

export const TaskContainer = styled("div")(() => ({
  "&": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "25px",
    paddingBottom: "24px",
  },
}));

export const TaskColoredBall = styled("div")(() => ({
  "&": {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "red",
  },
}));

export const TaskName = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "2.4px",
    marginLeft: "15px",
  },
}));

export const PaperContainer = styled(Paper)(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    minHeight: "88px",
    borderRadius: "8px",
    boxShadow: `0px 4px 6px 0px ${theme.custom.boxShadowColor}`,
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    flexGrow: "0.03",
  },
}));

export const TaskTitle = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.secondary,
    paddingLeft: "16px",
    textAlign: "start",
    alignSelf: "start",
    fontSize: "15px",
    fontWeight: 700,
  },
}));

export const AmountOfSubtasks = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    paddingLeft: "16px",
    alignSelf: "start",
    fontSize: "12px",
    fontWeight: 700,
    paddingnBottom: "23px",
  },
}));
