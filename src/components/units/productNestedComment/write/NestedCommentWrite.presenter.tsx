import * as S from "./NestedCommentWrite.styles";
import CommentSvg from "../../../commons/svg/comment";
import { IBoardCommentWriteUIProps } from "./NestedCommentWrite.types";

export default function NestedCommentWriteUI({
  onChangeContents,
  contents,
  onClickAnswer,
}: IBoardCommentWriteUIProps) {
  return (
    <>
      <S.CommentsWrapper>
        <S.Line></S.Line>
        <S.ComBody>
          <S.ComBodyTitle>
            <CommentSvg />
            <S.CommentSpan>답글달기</S.CommentSpan>
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
              <S.ComContentsRegister onClick={onClickAnswer}>
                답글달기
              </S.ComContentsRegister>
            </S.ComContentsOptionBox>
          </S.ComContentsBox>
        </S.ComBody>
      </S.CommentsWrapper>
    </>
  );
}
