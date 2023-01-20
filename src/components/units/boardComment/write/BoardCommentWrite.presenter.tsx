import * as S from "./BoardCommentWrite.styles";
import CommentSvg from "../../../commons/svg/comment";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI({
  onClickComment,
  onChangeWriter,
  onChangePassword,
  onChangeContents,
  writer,
  password,
  contents,
  rating,
  onChangeRating,
  isAsk,
  onClickAsk,
}: IBoardCommentWriteUIProps) {
  return (
    <>
      {isAsk ? (
        <S.CommentsWrapper>
          <S.ComBody>
            <S.ComBodyTitle>
              <CommentSvg />
              <S.CommentSpan>문의하기</S.CommentSpan>
            </S.ComBodyTitle>
            <S.ComContentsBox>
              <S.ComContents
                maxLength={99}
                onChange={onChangeContents}
                value={contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              ></S.ComContents>
              <S.ComContentsOptionBox>
                <S.ComContentsCount>{contents.length}/100</S.ComContentsCount>
                <S.ComContentsRegister onClick={onClickAsk}>
                  문의하기
                </S.ComContentsRegister>
              </S.ComContentsOptionBox>
            </S.ComContentsBox>
          </S.ComBody>
        </S.CommentsWrapper>
      ) : (
        <S.CommentsWrapper>
          <S.ComBody>
            <S.ComBodyTitle>
              <CommentSvg />
              <S.CommentSpan>댓글</S.CommentSpan>
            </S.ComBodyTitle>
            <S.ComUserBox>
              <S.ComUserName
                onChange={onChangeWriter}
                placeholder="작성자"
                value={writer}
              />

              <S.ComUserPassword
                onChange={onChangePassword}
                placeholder="비밀번호"
                value={password}
                type="password"
              />
              <Rate
                onChange={onChangeRating}
                value={rating}
                style={{ color: "#8DA4D0" }}
              />
            </S.ComUserBox>
            <S.ComContentsBox>
              <S.ComContents
                maxLength={99}
                onChange={onChangeContents}
                value={contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              ></S.ComContents>
              <S.ComContentsOptionBox>
                <S.ComContentsCount>{contents.length}/100</S.ComContentsCount>
                <S.ComContentsRegister onClick={onClickComment}>
                  등록하기
                </S.ComContentsRegister>
              </S.ComContentsOptionBox>
            </S.ComContentsBox>
          </S.ComBody>
        </S.CommentsWrapper>
      )}
    </>
  );
}
