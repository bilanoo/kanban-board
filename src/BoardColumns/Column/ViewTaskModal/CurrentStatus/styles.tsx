import { MenuItem, Select, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Container = styled(Box)(() => ({
  "&": {
    display: "inline-flex",
    flexDirection: "column",
    margin: "0px 32px 32px 32px",
    width: "387px",
  },
}));

export const Dropdown = styled(Select)(({ theme }) => ({
  "&": {
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(130, 143, 163, 0.25)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.contrastText,
  },
}));

export const DropdownItem = styled(MenuItem)(() => ({}));

export const StatusLabel = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "0.75rem",
    fontWeight: 700,
    paddingBottom: "8px",
  },
}));
