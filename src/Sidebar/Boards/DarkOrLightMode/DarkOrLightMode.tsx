import LightModeIcon from "../../../assets/icon-light-theme.svg";
import DarkModeIcon from "../../../assets/icon-dark-theme.svg";
import { Container, AntSwitch } from "./styles";
import useLightOrDarkModeStore from "../../../stores/LightOrDarkMode.store";

export const DarkOrLightMode = () => {
  const { setMode, mode } = useLightOrDarkModeStore((state) => state);
  function handleClick() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <Container className="dark-light-mode-container">
      <img
        src={LightModeIcon}
        alt="light mode icon"
        style={{ width: "25px", height: "25px", marginRight: "20px" }}
      />
      <AntSwitch onClick={handleClick} />
      <img
        src={DarkModeIcon}
        alt="dark mode icon"
        style={{ width: "25px", height: "25px", marginLeft: "20px" }}
      />
    </Container>
  );
};
