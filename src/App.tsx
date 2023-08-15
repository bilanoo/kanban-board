import "./App.css";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="board-container">
      <Sidebar />
      <div className="board-header">
        <p>Platform Launch</p>
      </div>
      <div className="board-content">
        <p>Board Content</p>
      </div>
    </div>
  );
}

export default App;
