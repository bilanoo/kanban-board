import "./App.css";
import { BoardColumns } from "./BoardColumns/BoardColumns";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="board-container">
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
    </div>
  );
}

export default App;
