import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  CREATE_USED_ITEM_QUESTION,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "../../product/detail/ProductDetail.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(5);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onClickAsk = async () => {
    if (contents === "") {
      Modal.error({ content: "내용을 입력해주세요." });
    }

    if (contents) {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.productId,
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
    }
    setContents("");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickComment = async () => {
    if (writer === "") {
      Modal.error({ content: "작성자를 입력해주세요." });
    }
    if (password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요." });
    }
    if (contents === "") {
      Modal.error({ content: "내용을 입력해주세요." });
    }

    if (writer && password && contents) {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    }
    setWriter("");
    setPassword("");
    setContents("");
    setRating(5);
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      contents={contents}
      writer={writer}
      password={password}
      onClickComment={onClickComment}
      onChangeRating={onChangeRating}
      rating={rating}
      isAsk={props.isAsk}
      onClickAsk={onClickAsk}
    />
  );
}
