import { Switch, styled } from "@mui/material";

export const Container = styled("div")(() => ({
  "&": {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    justifyContent: "center",
    backgroundColor: "var(--empty-column-color)",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginRight: "12px",
    marginLeft: "12px",
    position: "relative",
  },
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "var(--dark-purple)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "var(--dark-purple)",
    boxSizing: "border-box",
  },
}));
