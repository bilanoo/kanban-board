import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    height: "100%",
    minWidth: "280px",
    background: theme.custom.emptyColumn,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "62px",
    marginLeft: "24px",
    marginRight: "224px",
    flexShrink: 0,
    cursor: "pointer",
  },
}));

export const AddNewColumnText = styled(Typography)(() => ({
  "&": {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "normal",
  },
}));
