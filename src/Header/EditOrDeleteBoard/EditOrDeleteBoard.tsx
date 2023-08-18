import {
  DeleteMenuOption,
  EditMenuOption,
  EditOrDeleteButton,
  PopUpMenu,
} from "./style";

import VerticalEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import { useState } from "react";

export const EditOrDeleteBoard = () => {
  const [modalStatus, setModalStatus] = useState<null | HTMLElement>(null);
  const open = Boolean(modalStatus);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalStatus(event.currentTarget);
  };
  const handleClose = () => {
    setModalStatus(null);
  };
  return (
    <>
      <EditOrDeleteButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={VerticalEllipsis} alt="edit or delete board button" />
      </EditOrDeleteButton>
      <PopUpMenu
        id="basic-menu"
        anchorEl={modalStatus}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <EditMenuOption onClick={handleClose}>Edit Board</EditMenuOption>
        <DeleteMenuOption onClick={handleClose}>Delete Board</DeleteMenuOption>
      </PopUpMenu>
    </>
  );
};
