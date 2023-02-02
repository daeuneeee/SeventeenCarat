import { Fragment } from "react";
import XSvg from "../../../commons/svg/x";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../list/ProductCommentList.styles";
import UserCommentSvg from "../../../commons/svg/usercomment";
import NestedCommentWrite from "../../productNestedComment/write/NestedCommentWrite.container";
import NestedCommentSvg from "../../../commons/svg/nestedComment";
import NestedCommentList from "../../productNestedComment/list/NestedCommentList.container";
import { IProductCommentListUIProps } from "./ProductCommentList.types";

export default function ProductCommentListUI({
  onClickCommentUpdate,
  onClickUpdateBtn,
  commentId,
  onChangeEditContents,
  onClickCommentDeleteBtn,
  onClickCommentDelete,
  deleteComment,
  editContents,
  onClickCancelBtn,
  isEdit,
  el,
  index,
  onClickNestedComment,
  isNestedComment,
  data,
}: IProductCommentListUIProps) {
  return (
    <>
      <S.ComWrapper>
        <Fragment>
          {isEdit && commentId === el._id ? (
            <>
              <S.ComUserBox>
                <S.ComUserName
                  placeholder="작성자"
                  defaultValue={el.user.name}
                  disabled
                />
                <S.ComContentEditCancelBtn onClick={onClickCancelBtn}>
                  <XSvg></XSvg>
                </S.ComContentEditCancelBtn>
              </S.ComUserBox>
              <S.ComContentsBox>
                <S.ComContents
                  onChange={onChangeEditContents}
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                  defaultValue={el.contents}
                ></S.ComContents>
                <S.ComContentsOptionBox>
                  <S.ComContentsCount>
                    {editContents ? editContents.length : el.contents.length}
                    /100
                  </S.ComContentsCount>
                  <S.ComContentsRegister onClick={onClickCommentUpdate}>
                    수정하기
                  </S.ComContentsRegister>
                </S.ComContentsOptionBox>
              </S.ComContentsBox>
            </>
          ) : (
            <S.ComContentsListBox>
              <S.ComContentsListUserBox>
                <UserCommentSvg></UserCommentSvg>
                <S.ComContentsListUserDiv>
                  <S.ComContentsListUserName>
                    <S.UserNameSpan>{el.user.name}</S.UserNameSpan>
                  </S.ComContentsListUserName>
                  <S.ComContentsListContents>
                    {el.contents}
                  </S.ComContentsListContents>
                </S.ComContentsListUserDiv>
                <S.ComContentsListEditBox>
                  <S.ComNestedComment
                    id={el._id}
                    onClick={onClickNestedComment}
                  >
                    <NestedCommentSvg />
                  </S.ComNestedComment>
                  <S.ComContentsListEditBtn
                    id={el._id}
                    value={index}
                    onClick={onClickUpdateBtn}
                  >
                    <S.ComContentsListEdit src="/grayPen.png" />
                  </S.ComContentsListEditBtn>
                  <S.ComContentsListDeleteBtn
                    onClick={onClickCommentDeleteBtn}
                    id={el._id}
                  >
                    <XSvg></XSvg>
                  </S.ComContentsListDeleteBtn>
                </S.ComContentsListEditBox>
              </S.ComContentsListUserBox>
              <S.ComContentsListDate>
                {getDate(el.createdAt)}
              </S.ComContentsListDate>
            </S.ComContentsListBox>
          )}

          {deleteComment ? (
            commentId === el._id ? (
              <>
                <S.ComUserBox>
                  <S.ComContentsDelete onClick={onClickCommentDelete}>
                    삭제하기
                  </S.ComContentsDelete>
                </S.ComUserBox>
              </>
            ) : null
          ) : null}
        </Fragment>
      </S.ComWrapper>
      {isNestedComment && el._id === commentId ? (
        <NestedCommentWrite el={el} />
      ) : (
        <></>
      )}
      {data?.fetchUseditemQuestionAnswers.map((answersMap) => (
        <NestedCommentList
          el={el}
          answersMap={answersMap}
          key={answersMap._id}
        />
      ))}
    </>
  );
}
