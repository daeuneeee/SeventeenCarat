import { ChangeEvent, MouseEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

// export interface IBoardCommentListProps {
// }

export interface IBoardCommentListUIProps {
  // comments: any;
  // update: boolean;
  deleteComment: boolean;
  editContents: string;
  commentId: string;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickUpdateBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: () => void;
  onChangeEditPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCommentDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCommentDeleteBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEditRating: (event: number) => void;
  // onLoadMore: () => void;
  isEdit: boolean;
  onClickCancelBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  el: IBoardComment;
  index: number;
}

export interface IMyVariables {
  boardCommentId: string;
  password: string;
  // contents: string;
  // rating: string;
  updateBoardCommentInput: { contents: string; rating: number };
}

export interface IBoardCommentListProps {
  el: IBoardComment;
  index: number;
}
