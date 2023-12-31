import { Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { BoardColumns } from "./BoardColumns/BoardColumns";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useEffect, useMemo } from "react";
import { getDesignTokens } from "./theme";
import { useCurrentMode } from "./stores/LightOrDarkMode.store";
import useBoardContentStore, {
  useKanbanData,
  useSelectedBoard,
} from "./stores/BoardContent.store";
import { NoBoardsAvailable } from "./NoBoardsAvailable/NoBoardsAvailable";

function App() {
  const lightOrDarkMode = useCurrentMode();
  const { actions } = useBoardContentStore((state) => state);
  const selectedBoard = useSelectedBoard();
  const kanbanData = useKanbanData();

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );

  useEffect(() => {
    const selectedBoardContent = kanbanData.boards.filter(
      (EachBoard) => EachBoard.name === selectedBoard
    );

    actions.setSelectedBoardContent(selectedBoardContent[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBoard]);
  return (
    <ThemeProvider theme={theme}>
      <Box className="board-container">
        {selectedBoard === "No boards available" ? (
          <NoBoardsAvailable />
        ) : (
          <>
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
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
