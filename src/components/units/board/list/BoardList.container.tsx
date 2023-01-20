import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";

export default function BoardList() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: result } = useQuery(FETCH_BOARDS_BEST);
  const router = useRouter();
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToRegister = async () => {
    await router.push(`/boards/new`);
  };

  const onClickSearch = async () => {
    setKeyword(search);
    await refetch({ search, page: 1 });

    // setSearch(event.target.id);
  };

  console.log();

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // setKeyword(event.target.value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToRegister={onClickMoveToRegister}
      result={result}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
