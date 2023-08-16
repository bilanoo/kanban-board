import "./App.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="board-container">
      <Sidebar />
      <Header />
      <div className="board-content">
        <p>Board Content</p>
      </div>
    </div>
  );
}

export default App;
