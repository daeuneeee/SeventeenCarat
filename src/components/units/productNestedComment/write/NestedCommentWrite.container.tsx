import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import NestedCommentWriteUI from "./NestedCommentWrite.presenter";
import { CREATE_QUESTION_ANSWER } from "./NestedCommentWrite.queries";
import { isNestedCommentState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { FETCH_QUESTION_ANSWERS } from "../list/NestedCommentList.queries";

export default function NestedCommentWrite({ el }) {
  const [contents, setContents] = useState("");
  const [createQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);
  const [isNestedComment, setIsNestedComment] =
    useRecoilState(isNestedCommentState);

  const onClickAnswer = async () => {
    const result = await createQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: { contents },
        useditemQuestionId: el._id,
      },
      refetchQueries: [
        {
          query: FETCH_QUESTION_ANSWERS,
          variables: { useditemQuestionId: el._id },
        },
      ],
    });
    setIsNestedComment((prev) => !prev);
    console.log(result);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  return (
    <NestedCommentWriteUI
      onChangeContents={onChangeContents}
      contents={contents}
      onClickAnswer={onClickAnswer}
    />
  );
}
