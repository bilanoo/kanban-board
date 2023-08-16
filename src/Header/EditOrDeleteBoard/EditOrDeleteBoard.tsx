import { EditOrDeleteButton } from "./style";

import VerticalEllipsis from "../../assets/icon-vertical-ellipsis.svg";

export const EditOrDeleteBoard = () => {
  return (
    <EditOrDeleteButton>
      <img src={VerticalEllipsis} alt="edit or delete board button" />
    </EditOrDeleteButton>
  );
};
