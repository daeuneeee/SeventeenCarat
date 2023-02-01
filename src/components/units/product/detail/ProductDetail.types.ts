import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  comments?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
  onClickList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  sellerID?: string;
  loggedInId?: string;
  onClickPick: () => void;
  onClickBuying: () => void;
  onClickImg: (event: MouseEvent<HTMLDivElement>) => void;
  changeImg: string;
}
