import { IconButton, Menu, MenuItem, styled } from "@mui/material";
interface ViewModalProps {
  marginLeft: string;
  marginRight: string;
}
export const EditOrDeleteButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "marginLeft" && prop !== "marginRight",
})<ViewModalProps>(({ marginLeft, marginRight }) => ({
  "&": {
    // 10px for both
    marginLeft: marginLeft,
    marginRight: marginRight,
  },
  "&:hover": {
    backgroundColor: "none",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      marginRight: marginRight,
    },
  },
}));

export const PopUpMenu = styled(Menu)(() => ({
  "&": {
    marginTop: "10px",
  },
  "@media only screen and (min-width: 992px)": {
    "&&.MuiPaper-root": {
      marginRight: "30px",
    },
  },
}));

interface MenuOptionProps {
  textColor: string;
}
export const MenuOption = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "textColor",
})<MenuOptionProps>(({ textColor }) => ({
  "&": {
    color: textColor,
    width: "160px",
  },
}));

export const DeleteMenuOption = styled(MenuItem)(({ theme }) => ({
  "&": {
    color: theme.custom.delete,
    width: "160px",
  },
}));
