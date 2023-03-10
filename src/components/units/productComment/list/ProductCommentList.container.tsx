import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";

import "antd/dist/antd.css";

import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentList.queries";
import { Modal } from "antd";
import ProductCommentListUI from "./ProductCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "../../product/detail/ProductDetail.queries";
import { useRecoilState } from "recoil";
import { isNestedCommentState } from "../../../../commons/store";
import {
  IMyVariables,
  IProductCommentListProps,
} from "./ProductCommentList.types";
import {
  IMutation,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";

export default function ProductCommentList({
  el,
  index,
}: IProductCommentListProps) {
  const router = useRouter();
  const [commentId, setCommentId] = useState("");
  const [editContents, setEditContents] = useState("");
  const [isNestedComment, setIsNestedComment] =
    useRecoilState(isNestedCommentState);

  const [isEdit, setIsEdit] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">
  >(UPDATE_USED_ITEM_QUESTION);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: el._id },
  });

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

  const onClickNestedComment = (event: MouseEvent<HTMLDivElement>) => {
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
      const myVariables: IMyVariables = {
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
      Modal.success({ content: "??????????????? ?????????????????????." });
    } catch (error) {
      Modal.error({ content: "????????? ????????? ????????????." });
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
      Modal.success({ content: "??????????????? ?????????????????????." });
    } catch (error) {
      Modal.error({ content: "????????? ????????? ????????????." });
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
      data={data}
    />
  );
}
