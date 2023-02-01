import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import { FETCH_QUESTION_ANSWERS } from "../../productComment/list/ProductCommentList.queries";

import NestedCommentListUI from "./NestedCommentList.presenter";
import {
  DELETE_QUESTION_ANSWER,
  UPDATE_QUESTION_ANSWER,
} from "./NestedCommentList.queries";
import {
  IMyVariables,
  INestedCommentListProps,
} from "./NestedCommentList.types";

export default function NestedCommentList({
  el,
  answersMap,
}: INestedCommentListProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [nestedCommentId, setNestedCommentId] = useState("");
  const [editContents, setEditContents] = useState("");

  const [updateQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">
  >(UPDATE_QUESTION_ANSWER);

  const [deleteQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">
  >(DELETE_QUESTION_ANSWER);

  const onClickDeleteBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setIsDelete((prev) => !prev);
    setIsEdit(false);
    setNestedCommentId(event.currentTarget.id);
  };

  const onClickUpdateBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit((prev) => !prev);
    setIsDelete(false);
    setNestedCommentId(event.currentTarget.id);
  };

  const onClickUpdate = async () => {
    try {
      const myVariables: IMyVariables = {
        useditemQuestionAnswerId: nestedCommentId,
      };
      if (editContents) {
        myVariables.updateUseditemQuestionAnswerInput = {};
        if (editContents) {
          myVariables.updateUseditemQuestionAnswerInput.contents = editContents;
        }
      }
      await updateQuestionAnswer({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWERS,
            variables: { useditemQuestionId: el._id },
          },
        ],
      });
      setIsEdit((prev) => !prev);
      Modal.success({ content: "정상적으로 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: "수정할 권한이 없습니다." });
    }
  };

  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const onClickCancelBtn = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: nestedCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION_ANSWERS,
            variables: { useditemQuestionId: el._id },
          },
        ],
      });
      Modal.success({ content: "댓글이 정상적으로 삭제되었습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 권한이 없습니다." });
    }
  };

  return (
    <>
      <NestedCommentListUI
        answersMap={answersMap}
        isDelete={isDelete}
        onClickDeleteBtn={onClickDeleteBtn}
        nestedCommentId={nestedCommentId}
        onClickDelete={onClickDelete}
        onClickUpdateBtn={onClickUpdateBtn}
        isEdit={isEdit}
        onClickCancelBtn={onClickCancelBtn}
        onChangeEditContents={onChangeEditContents}
        onClickUpdate={onClickUpdate}
        editContents={editContents}
      />
    </>
  );
}
