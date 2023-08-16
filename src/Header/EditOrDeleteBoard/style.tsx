import { IconButton, Menu, styled } from "@mui/material";

export const EditOrDeleteButton = styled(IconButton)(() => ({
  "&": {
    marginLeft: "10px",
  },
  "&:hover": {
    backgroundColor: "none",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      marginRight: "20px",
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
