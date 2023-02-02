import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  writer: string;
  password: string;
  onClickComment: () => void;
  rating: number;
  onChangeRating: (value: number) => void;
  isAsk?: boolean;
  onClickAsk: () => void;
}

export interface IBoardCommentWriteProps {
  isAsk?: boolean;
}
