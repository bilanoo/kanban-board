import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    display: "inline-flex", // Change display to inline-flex
    flexDirection: "column",
    color: theme.palette.text.secondary,
    width: "100%",
    minHeight: "40px",
    height: "auto", // Allow the height to adjust based on content
    backgroundColor: theme.custom.contentColor,
    justifyContent: "center",
    alignItems: "center", // Align items vertically in the center
    borderRadius: "2px",
  },
}));

export const CustomControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&": {
    color: theme.palette.text.secondary,
    marginLeft: "12px",
    marginRight: "16px",
    width: "100%",
    height: "100%",
    alignSelf: "flex-start",
  },
  "&:hover": {
    boxShadow: "2px solid white",
  },
}));

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "&": {
    alignSelf: "center",
    padding: "0",
    color: "rgba(130, 143, 163, 0.25)",
  },

  "&.Mui-checked": {
    color: theme.palette.primary.contrastText,
  },
}));

interface TypographyProps {
  isSelected: boolean;
}
export const SubtaskInformation = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<TypographyProps>(({ theme, isSelected }) => ({
  fontSize: "0.75rem",
  fontWeight: "700",
  lineHeight: "normal",
  marginTop: "4px",
  marginBottom: "4px",
  marginLeft: "16px",
  marginRight: "4px",
  textDecorationLine: `${isSelected ? "line-through" : "none"}`,
  color: `${isSelected ? "#828FA3" : theme.palette.text.secondary}`,
}));
