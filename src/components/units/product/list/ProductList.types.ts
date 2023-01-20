import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickMoveToRegister: () => void;
  result?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  count?: number;
  onClickSearch: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  onLoadMore: () => void;
}
