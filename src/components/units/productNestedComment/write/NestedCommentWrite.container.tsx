import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import NestedCommentWriteUI from "./NestedCommentWrite.presenter";
import { CREATE_QUESTION_ANSWER } from "./NestedCommentWrite.queries";
import { isNestedCommentState } from "../../../../commons/store";
import { useSetRecoilState } from "recoil";
import { FETCH_QUESTION_ANSWERS } from "../../productComment/list/ProductCommentList.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite({ el }: INestedCommentWriteProps) {
  const [contents, setContents] = useState("");
  const [createQuestionAnswer] = useMutation(CREATE_QUESTION_ANSWER);
  const setIsNestedComment = useSetRecoilState(isNestedCommentState);

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
