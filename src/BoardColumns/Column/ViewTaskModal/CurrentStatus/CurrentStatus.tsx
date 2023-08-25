import { Container, Dropdown, DropdownItem, StatusLabel } from "./styles";
import downChevronIcon from "../../../../assets/icon-chevron-down.svg";

export const CurrentStatus = () => {
  return (
    <Container>
      <StatusLabel>Current Status</StatusLabel>
      <Dropdown
        IconComponent={(props) => (
          <img
            src={downChevronIcon}
            alt="drop down status icon"
            {...props}
            style={{ width: "15px", marginRight: "10px" }}
          />
        )}
      >
        <DropdownItem>Todo</DropdownItem>
        <DropdownItem>Doing</DropdownItem>
        <DropdownItem>Done</DropdownItem>
      </Dropdown>
    </Container>
  );
};
