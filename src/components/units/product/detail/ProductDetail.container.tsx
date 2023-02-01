import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../layout/header/LayoutHeader.queries";
import { FETCH_USED_ITEM_OF_THE_BEST } from "../list/ProductList.queries";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  BUYING_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEM_QUESTIONS,
  PICKED_ITEM,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const [changeImg, setChangeImg] = useState("");

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });
  const sellerID = data?.fetchUseditem.seller?._id;

  const { data: userLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const loggedInId = userLoggedIn?.fetchUserLoggedIn._id;

  const [pickedItem] =
    useMutation<Pick<IMutation, "toggleUseditemPick">>(PICKED_ITEM);
  const [deleteUsedItem] =
    useMutation<Pick<IMutation, "deleteUseditem">>(DELETE_USED_ITEM);
  const [buyingSelling] =
    useMutation<Pick<IMutation, "createPointTransactionOfBuyingAndSelling">>(
      BUYING_SELLING
    );

  const { data: comments, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const onClickPick = () => {
    void pickedItem({
      variables: { useditemId: router.query.productId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.productId },
        },
        { query: FETCH_USED_ITEM_OF_THE_BEST },
      ],
    });
  };

  const onClickImg = (event: MouseEvent<HTMLDivElement>) => {
    setChangeImg(event.currentTarget.id);
  };

  const onClickUpdate = () => {
    void router.push(`/products/${router.query.productId}/edit`);
  };

  const onClickList = () => {
    void router.push(`/products/`);
  };

  const onClickDelete = async () => {
    await deleteUsedItem({
      variables: { useditemId: router.query.productId },
      update(cache) {
        cache.modify({
          fields: {
            fetchUseditems: () => {},
          },
        });
      },
    });
    await router.push(`/products/`);
    Modal.success({ content: "상품이 정상적으로 삭제되었습니다." });
  };

  const onClickBuying = async () => {
    try {
      await buyingSelling({
        variables: { useritemId: router.query.productId },
        update(cache) {
          cache.modify({
            fields: {
              fetchUseditems: () => {},
              fetchUserLoggedIn: () => {},
            },
          });
        },
      });
      Modal.success({ content: "구매 완료하였습니다." });
      await router.push(`/myPage/boughtPage`);
    } catch (error) {
      if (!accessToken) {
        return Modal.error({ content: "로그인을 해주세요." });
      } else {
        Modal.error({ content: "이미 구매가 완료된 상품입니다." });
      }

      await router.push(`/products`);
    }
  };

  const onLoadMore = async () => {
    if (!comments) return;
    await fetchMore({
      variables: {
        page: Math.ceil(comments.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  return (
    <ProductDetailUI
      data={data}
      comments={comments}
      onLoadMore={onLoadMore}
      onClickList={onClickList}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      sellerID={sellerID}
      loggedInId={loggedInId}
      onClickPick={onClickPick}
      onClickBuying={onClickBuying}
      onClickImg={onClickImg}
      changeImg={changeImg}
    />
  );
}
