import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  isActive: number;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}
