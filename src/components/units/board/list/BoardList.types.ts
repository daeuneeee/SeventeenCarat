import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToRegister: () => void;
  result?: Pick<IQuery, "fetchBoardsOfTheBest">;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  onClickSearch: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
