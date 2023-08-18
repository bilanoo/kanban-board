import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

export const Container = styled("div")(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
}));

export const BoardList = styled(List)(() => ({
  "&": {
    margin: "0",
    padding: "0",
  },
}));

export const EachBoard = styled(ListItem)(() => ({
  "&": {
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "20px",
  },
}));

export const BoardContent = styled(ListItemButton)(({ theme }) => ({
  "&": {
    paddingLeft: "24px",
    paddingRight: "0",
    borderRadius: "0 100px 100px 0",
  },
  "&:hover": {
    backgroundColor: theme.custom.onHover,
    borderRadius: "0 100px 100px 0",
  },
  "&:focus": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.custom.white,
  },
  "&&.Mui-selected": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.custom.white,
  },
}));

export const IconContent = styled(ListItemIcon)(() => ({
  "&": {
    minWidth: "fit-content",
  },
}));

export const BoardText = styled(ListItemText)(() => ({
  "&": {
    marginLeft: "12px",
  },
  ".MuiListItemText-primary": {
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
  },
}));

export const CreateNewBoard = styled(Button)(({ theme }) => ({
  "&": {
    margin: 0,
    color: theme.palette.primary.contrastText,
    justifyContent: "start",
    paddingLeft: "28px",
    fontWeight: "700",
    marginRight: "20px",
    height: "46.5px",
    borderRadius: "0 100px 100px 0",
    textTransform: "none",
  },
}));

export const HideSidebar = styled(Button)(({ theme }) => ({
  "&": {
    margin: 0,
    justifyContent: "start",
    fontWeight: "700",
    marginRight: "20px",
    height: "48px",
    paddingLeft: "20px",
    borderRadius: "0 100px 100px 0",
    textTransform: "none",
    marginBottom: "20px",
    marginTop: "15px",
  },
  "&&.MuiButton-text": {
    color: theme.palette.text.primary,
  },

  "&:hover": {
    backgroundColor: theme.custom.onHover,
  },
}));

export const AllBoardsText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "2.4px",
    marginLeft: "24px",
    marginTop: "30px",
    color: theme.palette.text.primary,
  },
}));
