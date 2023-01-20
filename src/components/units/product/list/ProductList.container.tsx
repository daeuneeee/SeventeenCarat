import {
  FETCH_BOARDS_COUNT,
  FETCH_USED_ITEMS,
  FETCH_USED_ITEM_OF_THE_BEST,
} from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import ProductListUI from "./ProductList.presenter";
import { useAuth } from "../../../commons/hooks/useAuth";

export default function ProductList() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch, fetchMore } =
    useQuery<Pick<IQuery, "fetchUseditems">>(FETCH_USED_ITEMS);

  const { data: result } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEM_OF_THE_BEST
  );

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToRegister = async () => {
    await router.push(`/products/new`);
  };

  const onClickSearch = async () => {
    setKeyword(search);
    await refetch({ search, page: 1 });

    // setSearch(event.target.id);
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    // setKeyword(event.target.value);
  };

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListUI
      data={data}
      onClickMoveToRegister={onClickMoveToRegister}
      result={result}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      onLoadMore={onLoadMore}
    />
  );
}
