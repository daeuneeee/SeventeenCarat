import { ChangeEvent } from "react";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface INestedCommentWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  onClickAnswer: () => void;
}

export interface INestedCommentWriteProps {
  el: IUseditemQuestion;
}
