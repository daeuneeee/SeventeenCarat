import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

import NestedCommentListUI from "./NestedCommentList.presenter";
import {
  DELETE_QUESTION_ANSWER,
  FETCH_QUESTION_ANSWERS,
  UPDATE_QUESTION_ANSWER,
} from "./NestedCommentList.queries";

export default function NestedCommentList({ el }: IBoardCommentListProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [nestedCommentId, setNestedCommentId] = useState("");
  const { data } = useQuery(FETCH_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: el._id },
  });

  const [updateQuestionAnswer] = useMutation(UPDATE_QUESTION_ANSWER);

  const [editContents, setEditContents] = useState("");
  const [deleteQuestionAnswer] = useMutation(DELETE_QUESTION_ANSWER);

  const onClickDeleteBtn = (event) => {
    setIsDelete((prev) => !prev);
    setIsEdit(false);
    setNestedCommentId(event.currentTarget.id);
  };

  const onClickUpdateBtn = (event) => {
    setIsEdit((prev) => !prev);
    setIsDelete(false);
    setNestedCommentId(event.currentTarget.id);
  };

  const onClickUpdate = async () => {
    try {
      const myVariables = {
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
      {data?.fetchUseditemQuestionAnswers.map((answersMap) => (
        <NestedCommentListUI
          key={answersMap._id}
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
        />
      ))}
    </>
  );
}
