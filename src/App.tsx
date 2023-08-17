import "./App.css";
import { BoardColumns } from "./BoardColumns/BoardColumns";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="board-container">
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <BoardColumns />
      </div>
    </div>
  );
}

export default App;
