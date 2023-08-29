import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },
}));
