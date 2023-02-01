import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface INestedCommentListProps {
  el: IUseditemQuestion;
  answersMap: IUseditemQuestionAnswer;
}

export interface INestedCommentListUIProps {
  nestedCommentId: string;
  answersMap: IUseditemQuestionAnswer;
  onClickDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  isDelete: boolean;
  onClickDelete: () => void;
  onClickUpdateBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  onClickCancelBtn: () => void;
  onClickUpdate: () => void;
  editContents: string;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IMyVariables {
  useditemQuestionAnswerId: string;
  updateUseditemQuestionAnswerInput?: { contents?: string };
}
