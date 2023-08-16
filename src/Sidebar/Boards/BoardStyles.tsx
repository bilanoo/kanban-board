import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

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

export const BoardContent = styled(ListItemButton)(() => ({
  "&": {
    paddingLeft: "24px",
    paddingRight: "0",
    borderRadius: "0 100px 100px 0",
  },
  "&:hover": {
    backgroundColor: "var(--onhover-board)",
    borderRadius: "0 100px 100px 0",
  },
  "&:focus": {
    backgroundColor: "var(--dark-purple)",
    color: "var(--white)",
  },
  "&&.Mui-selected": {
    backgroundColor: "var(--dark-purple)",
    color: "var(--white)",
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

export const CreateNewBoard = styled(Button)(() => ({
  "&": {
    margin: 0,
    color: "var(--dark-purple)",
    justifyContent: "start",
    paddingLeft: "28px",
    fontWeight: "700",
    marginRight: "20px",
    height: "46.5px",
    borderRadius: "0 100px 100px 0",
  },
}));

export const HideSidebar = styled(Button)(() => ({
  "&": {
    margin: 0,
    justifyContent: "start",
    fontWeight: "700",
    marginRight: "20px",
    height: "48px",
    paddingLeft: "20px",
    borderRadius: "0 100px 100px 0",
  },
  "&&.MuiButton-text": {
    color: "var(--lighter-grey)",
  },

  "&:hover": {
    backgroundColor: "var(--onhover-board)",
  },
}));
