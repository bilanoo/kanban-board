import { MenuOption, EditOrDeleteButton, PopUpMenu } from "./style";

import VerticalEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import { useState } from "react";

interface MenuOption {
  optionValue: string;
  textColor: string;
}

interface EditOrDeleteModalProps {
  altInformation: string;
  dropdownOptions: MenuOption[];
  marginLeft: string;
  marginRight: string;
}

export const EditOrDeleteBoard = ({
  altInformation,
  dropdownOptions,
  marginLeft,
  marginRight,
}: EditOrDeleteModalProps) => {
  const [modalStatus, setModalStatus] = useState<null | HTMLElement>(null);
  const open = Boolean(modalStatus);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalStatus(event.currentTarget);
  };
  const handleClose = () => {
    setModalStatus(null);
  };

  console.log(marginLeft, marginRight);
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
            onClick={handleClose}
            textColor={eachMenuOption.textColor}
          >
            {eachMenuOption.optionValue}
          </MenuOption>
        ))}
      </PopUpMenu>
    </>
  );
};
