import "./SideBar.css";
import LogoLight from "../assets/logo-light.svg";
import { Boards } from "./Boards/Boards";

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

      <Boards />
    </div>
  );
};
