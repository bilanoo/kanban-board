import { MenuOption, EditOrDeleteButton, PopUpMenu } from "./style";

import VerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";

interface MenuOption {
  optionValue: string;
  textColor: string;
  handleClick: () => void;
}

interface GenericVerticalDropdownProps {
  altInformation: string;
  dropdownOptions: MenuOption[];
  marginLeft: string;
  marginRight: string;
  modalStatus: null | HTMLElement;
  setModalStatus: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  handleClose: () => void;
}

export const GenericVerticalDropDown = ({
  altInformation,
  dropdownOptions,
  marginLeft,
  marginRight,
  modalStatus,
  setModalStatus,
  handleClose,
}: GenericVerticalDropdownProps) => {
  const open = Boolean(modalStatus);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalStatus(event.currentTarget);
  };

  return (
    <>
      <EditOrDeleteButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        <img src={VerticalEllipsis} alt={altInformation} />
      </EditOrDeleteButton>
      <PopUpMenu
        id="pop-up-menu"
        anchorEl={modalStatus}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "pop-up-button" }}
      >
        {dropdownOptions.map((eachMenuOption) => (
          <MenuOption
            key={eachMenuOption.optionValue}
            onClick={eachMenuOption.handleClick}
            textColor={eachMenuOption.textColor}
          >
            {eachMenuOption.optionValue}
          </MenuOption>
        ))}
      </PopUpMenu>
    </>
  );
};
