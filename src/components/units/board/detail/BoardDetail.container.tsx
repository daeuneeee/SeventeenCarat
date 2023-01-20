import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const [address, setAddress] = useState(false);

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickAddressBtn = () => {
    setAddress((address) => !address);
  };

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const { data: comments, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onClickMoveToList = async () => {
    await router.push(`/boards`);
  };

  const onClickMoveToUpdate = async () => {
    if (typeof router.query.boardId === "string") {
      await router.push(`/boards/${router.query.boardId}/edit`);
    }
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    await router.push(`/boards`);
    Modal.success({ content: "게시글 삭제가 완료되었습니다." });
  };

  const onClickThumbsUp = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  const onClickThumbsDown = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  const onLoadMore = async () => {
    if (!comments) return;
    await fetchMore({
      variables: {
        page: Math.ceil(comments.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardDetailUI
      onClickAddressBtn={onClickAddressBtn}
      onClickThumbsUp={onClickThumbsUp}
      onClickThumbsDown={onClickThumbsDown}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      address={address}
      data={data}
      comments={comments}
      onLoadMore={onLoadMore}
    />
  );
}
