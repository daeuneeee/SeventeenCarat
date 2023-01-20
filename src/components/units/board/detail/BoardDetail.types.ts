import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  onClickAddressBtn: () => void;
  onClickThumbsUp: () => void;
  onClickThumbsDown: () => void;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDelete: () => void;
  address: boolean;
  data: any;
  comments: Pick<IQuery, "fetchBoardComments"> | undefined;
  onLoadMore: () => void;
}
