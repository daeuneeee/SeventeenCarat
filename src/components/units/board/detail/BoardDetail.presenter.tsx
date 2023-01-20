import * as S from "./BoardDetail.styles";
import LikeSvg from "../../../commons/svg/like";
import DislikeSvg from "../../../commons/svg/dislike";
import LinkSvg from "../../../commons/svg/link";
import AddressSvg from "../../../commons/svg/address";
import UserSvg from "../../../commons/svg/user";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../boardComment/list/BoardCommentList.container";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardComment } from "../../../../commons/types/generated/types";
import Dompurify from "dompurify";

const MyYoutube = styled(ReactPlayer)`
  margin: 0 auto;
`;

export default function BoardDetailUI({
  onClickAddressBtn,
  data,
  address,
  onClickThumbsDown,
  onClickThumbsUp,
  onClickMoveToList,
  onClickMoveToUpdate,
  onClickDelete,
  comments,
  onLoadMore,
}: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.Header>
            <S.HeaderFlex>
              <S.WriterBox>
                <S.Profile>
                  <UserSvg></UserSvg>
                </S.Profile>
                <S.WriterFlex>
                  <S.Title>
                    {data ? data.fetchBoard.title : "loading..."}
                  </S.Title>
                  <S.InformBox>
                    <S.Writer>
                      {data ? data.fetchBoard.writer : "loading..."}
                    </S.Writer>
                    <S.Date>
                      Date : &nbsp;
                      {data
                        ? data.fetchBoard.createdAt
                            .slice(0, 10)
                            .replaceAll("-", ".")
                        : "loading..."}
                    </S.Date>
                  </S.InformBox>
                </S.WriterFlex>
              </S.WriterBox>
              <S.ImageFlex>
                <S.ImgBtn>
                  <S.ImgShare>
                    <LinkSvg></LinkSvg>
                  </S.ImgShare>
                </S.ImgBtn>
                <S.ImgBtn onClick={onClickAddressBtn}>
                  <S.ImgLocation>
                    <AddressSvg></AddressSvg>
                  </S.ImgLocation>
                </S.ImgBtn>
                {address && (
                  <S.Address>
                    <div>
                      {data
                        ? data.fetchBoard.boardAddress.address
                        : "loading..."}
                    </div>
                    <div>
                      {data
                        ? data.fetchBoard.boardAddress.addressDetail
                        : "loading..."}
                    </div>
                  </S.Address>
                )}
              </S.ImageFlex>
            </S.HeaderFlex>
          </S.Header>
          <S.Body>
            <S.ImgDiv>
              {data?.fetchBoard.images.map(
                (imageUrl: string, index: number) => (
                  <S.ImgBox
                    key={index}
                    src={`https://storage.googleapis.com/${imageUrl}`.replaceAll(
                      " ",
                      "%20"
                    )}
                  />
                )
              )}
            </S.ImgDiv>
            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(data?.fetchBoard.contents),
                }}
              ></S.Contents>
            )}
            <MyYoutube
              url={data ? data.fetchBoard.youtubeUrl : "loading..."}
              muted={true}
              playing={true}
              controls={true}
              width={"486px"}
              height={"240px"}
            ></MyYoutube>
          </S.Body>
          <S.Footer>
            <S.ThumbsDiv>
              <S.ThumbsBtn onClick={onClickThumbsUp}>
                <S.ThumbsImg>
                  <LikeSvg></LikeSvg>
                </S.ThumbsImg>
              </S.ThumbsBtn>
              <S.ThumbsYellow>
                {data ? data.fetchBoard.likeCount : "loading..."}
              </S.ThumbsYellow>
            </S.ThumbsDiv>
            <S.ThumbsDiv>
              <S.ThumbsBtn onClick={onClickThumbsDown}>
                <S.ThumbsImg>
                  <DislikeSvg></DislikeSvg>
                </S.ThumbsImg>
              </S.ThumbsBtn>
              <S.ThumbsGray>
                {data ? data.fetchBoard.dislikeCount : "loading..."}
              </S.ThumbsGray>
            </S.ThumbsDiv>
          </S.Footer>
        </S.BoardWrapper>
        <S.ComHeader>
          <S.List onClick={onClickMoveToList}>목록으로</S.List>
          <S.Modify onClick={onClickMoveToUpdate}>수정하기</S.Modify>
          <S.Delete onClick={onClickDelete}>삭제하기</S.Delete>
        </S.ComHeader>
      </S.Wrapper>
      <BoardCommentWrite />
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true || false}
      >
        {comments?.fetchBoardComments.map(
          (el: IBoardComment, index: number) => {
            return <BoardCommentList key={el._id} el={el} index={index} />;
          }
        )}
      </InfiniteScroll>
    </>
  );
}
