import { Fragment } from "react";
import XSvg from "../../../commons/svg/x";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./NestedCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import UserCommentSvg from "../../../commons/svg/usercomment";

export default function NestedCommentListUI({
  nestedCommentId,
  answersMap,
  onClickDeleteBtn,
  isDelete,
  onClickDelete,
  onClickUpdateBtn,
  isEdit,
  onClickCancelBtn,
  onClickUpdate,
  editContents,
  onChangeEditContents,
}: IBoardCommentListUIProps) {
  console.log(editContents);
  return (
    <>
      <S.ComWrapper>
        <Fragment>
          {isEdit && nestedCommentId === answersMap._id ? (
            <>
              <S.ComBody>
                <S.ComUserBox>
                  <S.ComUserName
                    placeholder="작성자"
                    defaultValue={answersMap.user.name}
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
                    defaultValue={answersMap.contents}
                  ></S.ComContents>
                  <S.ComContentsOptionBox>
                    <S.ComContentsCount>
                      {editContents
                        ? editContents.length
                        : answersMap.contents.length}
                      /100
                    </S.ComContentsCount>
                    <S.ComContentsRegister onClick={onClickUpdate}>
                      수정하기
                    </S.ComContentsRegister>
                  </S.ComContentsOptionBox>
                </S.ComContentsBox>
              </S.ComBody>
            </>
          ) : (
            <S.ComContentsListBox id={answersMap._id}>
              <S.ComContentsListUserBox>
                <UserCommentSvg></UserCommentSvg>
                <S.ComContentsListUserDiv>
                  <S.ComContentsListUserName>
                    <S.UserNameSpan>{answersMap.user.name}</S.UserNameSpan>
                  </S.ComContentsListUserName>
                  <S.ComContentsListContents>
                    {answersMap.contents}
                  </S.ComContentsListContents>
                </S.ComContentsListUserDiv>
                <S.ComContentsListEditBox>
                  <S.ComContentsListEditBtn
                    id={answersMap._id}
                    // value={index}
                    onClick={onClickUpdateBtn}
                  >
                    <S.ComContentsListEdit src="/grayPen.png" />
                  </S.ComContentsListEditBtn>
                  <S.ComContentsListDeleteBtn
                    onClick={onClickDeleteBtn}
                    id={answersMap._id}
                  >
                    <XSvg></XSvg>
                  </S.ComContentsListDeleteBtn>
                </S.ComContentsListEditBox>
              </S.ComContentsListUserBox>
              <S.ComContentsListDate>
                {getDate(answersMap.createdAt)}
              </S.ComContentsListDate>
            </S.ComContentsListBox>
          )}

          {isDelete && nestedCommentId === answersMap._id ? (
            <>
              <S.ComUserBox>
                <S.ComContentsDelete onClick={onClickDelete}>
                  삭제하기
                </S.ComContentsDelete>
              </S.ComUserBox>
            </>
          ) : null}
        </Fragment>
      </S.ComWrapper>
    </>
  );
}
