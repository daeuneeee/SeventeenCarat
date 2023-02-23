import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";

import BoardCommentListUI from "./BoardCommentList.presenter";
import "antd/dist/antd.css";

import {
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { Modal } from "antd";
import { FETCH_BOARD_COMMENTS } from "../write/BoardCommentWrite.queries";
import { IBoardCommentListProps, IMyVariables } from "./BoardCommentList.types";

export default function BoardCommentList({
  el,
  index,
}: IBoardCommentListProps) {
  const router = useRouter();
  const [, setPassword] = useState("");
  const [commentId, setCommentId] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editContents, setEditContents] = useState("");
  const [editRating, setEditRating] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  const [deleteComment, setDeleteComment] = useState(false);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickUpdateBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit((prev) => !prev);
    setCommentId(event.currentTarget.id);
    setDeleteComment(false);
  };
  const onClickCommentDeleteBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setDeleteComment((deleteComment) => !deleteComment);
    setCommentId(event.currentTarget.id);
    setIsEdit(false);
  };

  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const onChangeEditPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setEditPassword(event.target.value);
  };

  const onClickCancelBtn = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickUpdate = async () => {
    try {
      const myVariables: IMyVariables = {
        boardCommentId: commentId,
        password: editPassword,
      };

      if (editContents || editRating) {
        myVariables.updateBoardCommentInput = {};
        if (editContents)
          myVariables.updateBoardCommentInput.contents = editContents;
        if (editRating) myVariables.updateBoardCommentInput.rating = editRating;
      }
      await updateBoardComment({
        variables: myVariables,
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      setEditPassword("");
      setIsEdit((prev) => !prev);
      Modal.success({ content: "정상적으로 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: "비밀번호가 틀렸습니다." }); // Error에 error가 속한다면
    }
  };

  const onChangeEditRating = (event: number) => {
    setEditRating(event);
  };

  const onClickCommentDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      setCommentId(event.currentTarget.id);
      await deleteBoardComment({
        variables: {
          password: editPassword,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      Modal.success({ content: "정상적으로 삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: "비밀번호가 틀렸습니다." });
    }
  };

  return (
    <BoardCommentListUI
      onClickCommentDelete={onClickCommentDelete}
      onClickUpdate={onClickUpdate}
      onClickUpdateBtn={onClickUpdateBtn}
      onChangeEditContents={onChangeEditContents}
      onChangeEditPassword={onChangeEditPassword}
      onClickCommentDeleteBtn={onClickCommentDeleteBtn}
      onChangePassword={onChangePassword}
      editContents={editContents}
      commentId={commentId}
      deleteComment={deleteComment}
      onChangeEditRating={onChangeEditRating}
      onClickCancelBtn={onClickCancelBtn}
      isEdit={isEdit}
      el={el}
      index={index}
    />
  );
}
