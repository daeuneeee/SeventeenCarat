import { Fragment } from "react";
import XSvg from "../../../commons/svg/x";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import { Rate } from "antd";
import UserCommentSvg from "../../../commons/svg/usercomment";

export default function BoardCommentListUI({
  onClickUpdate,
  onClickUpdateBtn,
  commentId,
  onChangeEditContents,
  onChangeEditPassword,
  onClickCommentDelete,
  onClickCommentDeleteBtn,
  deleteComment,
  editContents,
  onChangeEditRating,
  onClickCancelBtn,
  isEdit,
  el,
  index,
}: IBoardCommentListUIProps) {
  return (
    <>
      <S.ComWrapper>
        <Fragment>
          {isEdit && commentId === el._id ? (
            <>
              <S.ComUserBox>
                <S.ComUserName
                  placeholder="작성자"
                  defaultValue={el.writer || ""}
                  disabled
                />
                <S.ComUserPassword
                  onChange={onChangeEditPassword}
                  placeholder="비밀번호"
                  type="password"
                />
                <Rate
                  onChange={onChangeEditRating}
                  defaultValue={el.rating}
                  style={{ color: "#8DA4D0" }}
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
                  <S.ComContentsRegister onClick={onClickUpdate}>
                    수정하기
                  </S.ComContentsRegister>
                </S.ComContentsOptionBox>
              </S.ComContentsBox>
            </>
          ) : (
            <S.ComContentsListBox id={el.writer || ""}>
              <S.ComContentsListUserBox>
                <UserCommentSvg></UserCommentSvg>
                <S.ComContentsListUserDiv>
                  <S.ComContentsListUserName>
                    <S.UserNameSpan>{el.writer}</S.UserNameSpan>
                    <Rate
                      disabled
                      value={el.rating}
                      style={{ color: "#8DA4D0" }}
                    />
                  </S.ComContentsListUserName>
                  <S.ComContentsListContents>
                    {el.contents}
                  </S.ComContentsListContents>
                </S.ComContentsListUserDiv>
                <S.ComContentsListEditBox>
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
                  <S.ComUserName
                    placeholder="작성자"
                    defaultValue={el.writer || ""}
                    disabled
                  />
                  <S.ComUserPassword
                    onChange={onChangeEditPassword}
                    placeholder="비밀번호"
                    type="password"
                  />
                  <S.ComContentsRegister onClick={onClickCommentDelete}>
                    삭제하기
                  </S.ComContentsRegister>
                </S.ComUserBox>
              </>
            ) : null
          ) : null}
        </Fragment>
      </S.ComWrapper>
    </>
  );
}
