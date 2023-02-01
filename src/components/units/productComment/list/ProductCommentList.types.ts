import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface IProductCommentListProps {
  el: IUseditemQuestion;
  index: number;
}

export interface IMyVariables {
  useditemQuestionId: string;
  updateUseditemQuestionInput?: { contents?: string };
}

export interface IProductCommentListUIProps {
  onClickCommentUpdate: () => void;
  onClickUpdateBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  commentId: string;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCommentDelete: () => void;
  deleteComment: boolean;
  editContents: string;
  onClickCancelBtn: () => void;
  isEdit: boolean;
  el: IUseditemQuestion;
  index: number;
  onClickNestedComment: (event: MouseEvent<HTMLDivElement>) => void;
  isNestedComment: boolean;
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
}
