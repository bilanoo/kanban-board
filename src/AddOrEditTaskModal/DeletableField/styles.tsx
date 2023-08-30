import { Box, InputLabel, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },
}));

export const ErrorLabel = styled(InputLabel)(({ theme }) => ({
  "&": {
    color: theme.custom.delete,
    fontSize: "0.813rem",
  },
}));
