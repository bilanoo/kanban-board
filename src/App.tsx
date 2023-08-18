import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { BoardColumns } from "./BoardColumns/BoardColumns";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useMemo } from "react";
import { getDesignTokens } from "./theme";
import { useCurrentMode } from "./stores/lightOrDarkMode.store";

function App() {
  const lightOrDarkMode = useCurrentMode();

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Box className="board-container">
        <Header />

        <div
          className="content-container"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
          }}
        >
          <Sidebar />
          <BoardColumns />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
