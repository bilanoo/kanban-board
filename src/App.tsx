import "./App.css";
import { BoardColumns } from "./BoardColumns/BoardColumns";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="board-container">
      <Sidebar />
      <Header />
      <BoardColumns />
    </div>
  );
}

export default App;
