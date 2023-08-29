import { Container, Dropdown, DropdownItem, StatusLabel } from "./styles";
import downChevronIcon from "../../../../assets/icon-chevron-down.svg";
import { useSelectedBoardContent } from "../../../../stores/BoardContent.store";
import { selectedTaskContentProps } from "../../Column";
import { SelectChangeEvent } from "@mui/material/Select";

export interface CurrentStatusProps {
  currentStatusValue: string;
  setSelectedTaskContent?: React.Dispatch<
    React.SetStateAction<selectedTaskContentProps>
  >;
  statusLabel?: string;
  selectFieldWidth?: string;
  selectFieldHeight?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (event: SelectChangeEvent<string | any>) => void;
}

export const CurrentStatus = ({
  currentStatusValue,
  statusLabel,
  selectFieldWidth,
  selectFieldHeight,
  handleChange,
}: CurrentStatusProps) => {
  const selectedBoardContent = useSelectedBoardContent();

  return (
    <Container>
      <StatusLabel>{statusLabel}</StatusLabel>
      <Dropdown
        selectFieldWidth={selectFieldWidth}
        selectFieldHeight={selectFieldHeight}
        value={currentStatusValue}
        onChange={handleChange}
        IconComponent={(props) => (
          <img
            src={downChevronIcon}
            alt="drop down status icon"
            {...props}
            style={{ width: "15px", marginRight: "10px" }}
          />
        )}
      >
        {selectedBoardContent.columns.map((eachColumn) => (
          <DropdownItem key={eachColumn.name} value={eachColumn.name}>
            {eachColumn.name}
          </DropdownItem>
        ))}
      </Dropdown>
    </Container>
  );
};
