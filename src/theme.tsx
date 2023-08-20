import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      onHover: string;
      contentColor: string;
      white: string;
      borderColor: string;
      lightPurple: string;
      delete: string;
      columnContentColor: string;
      boxShadowColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      onHover?: string;
      contentColor?: string;
      white?: string;
      borderColor?: string;
      lightPurple?: string;
      delete?: string;
      columnContentColor?: string;
      boxShadowColor?: string;
    };
  }
}
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#FFFFFF" : "#2B2C37",
      contrastText: "#635fc7",
    },
    background: {
      default: mode === "light" ? "#FFFFFF" : "#3E3F4E",
      paper: mode === "light" ? "#FFFFFF" : "#2B2C37",
      emptyColumn:
        mode === "light"
          ? "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.50) 100%)"
          : "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)",
    },
    text: {
      primary: mode === "light" ? "#828FA3" : "#828FA3",
      secondary: mode === "light" ? "#000112" : "#fff",
    },
  },
  custom: {
    onHover: mode === "light" ? "#635fc71a" : "#FFFFFF",
    contentColor: mode === "light" ? "#F4F7FD" : "#20212C",
    white: "#FFFFFF",
    borderColor: mode === "light" ? "#e4ebfa" : "#3E3F4E",
    lightPurple: "#a8a4ff",
    delete: "#EA5555",
    columnContentColor: mode === "light" ? "#E4EBFA" : "#20212C",
    boxShadowColor:
      mode === "light" ? "rgba(54, 78, 126, 0.10)" : "rgb(173, 216, 230)",
  },
});
