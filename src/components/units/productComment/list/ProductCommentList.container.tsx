import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";

import "antd/dist/antd.css";

import {
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentList.queries";
import { Modal } from "antd";
import { IBoardCommentListProps } from "./BoardCommentList.types";
import ProductCommentListUI from "./ProductCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "../../product/detail/ProductDetail.queries";
import { useRecoilState } from "recoil";
import { isNestedCommentState } from "../../../../commons/store";

export default function ProductCommentList({
  el,
  index,
  comments,
}: IBoardCommentListProps) {
  const router = useRouter();
  const [commentId, setCommentId] = useState("");
  const [editContents, setEditContents] = useState("");
  const [isNestedComment, setIsNestedComment] =
    useRecoilState(isNestedCommentState);

  const [isEdit, setIsEdit] = useState(false);

  const [deleteComment, setDeleteComment] = useState(false);

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

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

  const onClickNestedComment = (event) => {
    setIsNestedComment((prev) => !prev);
    setCommentId(event.currentTarget.id);
  };

  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const onClickCancelBtn = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickCommentUpdate = async () => {
    try {
      const myVariables = {
        useditemQuestionId: commentId,
      };
      if (editContents) {
        myVariables.updateUseditemQuestionInput = {};
        if (editContents)
          myVariables.updateUseditemQuestionInput.contents = editContents;
      }
      await updateUseditemQuestion({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      setIsEdit((prev) => !prev);
      Modal.success({ content: "정상적으로 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: "수정할 권한이 없습니다." });
    }
  };

  const onClickCommentDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      Modal.success({ content: "정상적으로 삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 권한이 없습니다." });
    }
  };

  return (
    <ProductCommentListUI
      onClickCommentDelete={onClickCommentDelete}
      onClickCommentUpdate={onClickCommentUpdate}
      onClickUpdateBtn={onClickUpdateBtn}
      onChangeEditContents={onChangeEditContents}
      onClickCommentDeleteBtn={onClickCommentDeleteBtn}
      editContents={editContents}
      commentId={commentId}
      deleteComment={deleteComment}
      onClickCancelBtn={onClickCancelBtn}
      isEdit={isEdit}
      el={el}
      index={index}
      onClickNestedComment={onClickNestedComment}
      isNestedComment={isNestedComment}
      comments={comments}
    />
  );
}
