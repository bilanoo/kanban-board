import "./SideBar.css";
import LogoLight from "../assets/logo-light.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <div style={{ width: "40px" }}>
          <img src={LogoLight} alt="kanban-logo" className="logo" />
        </div>
        <h1 style={{ padding: 0, margin: 0 }} className="logo-name">
          kanban
        </h1>
      </div>

      <div className="boards-container">
        <h5>ALL BOARDS (3)</h5>
      </div>
    </div>
  );
};
