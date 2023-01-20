import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";
import LinkSvg from "../../../commons/svg/link";
import UserSvg from "../../../commons/svg/user";
import VisitedProducts from "../../../commons/vistedProducts";
import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.container";
import ProductCommentList from "../../productComment/list/ProductCommentList.container";
import * as S from "../detail/ProductDetail.styles";
import Dompurify from "dompurify";
import PickTrueSvg from "../../../commons/svg/picktrue";
import PickFalseSvg from "../../../commons/svg/pickfalse";
import MapsWriteAndDetail from "../../../commons/map/writeAndDetail";
import { v4 as uuidV4 } from "uuid";

export default function ProductDetailUI({
  data,
  comments,
  onLoadMore,
  onClickList,
  onClickUpdate,
  onClickDelete,
  loggedInId,
  sellerID,
  onClickPick,
  isPicked,
  onClickBuying,
  onClickImg,
  changeImg,
}) {
  return (
    <>
      <S.Wrapper>
        <S.ProductWrapper>
          <S.Header>
            <S.UserInfoBox>
              <UserSvg />
              <S.ProductAndDateBox>
                <S.ProductName>{data?.fetchUseditem.name}</S.ProductName>
                <S.SellerAndDateBox>
                  <S.Seller>{data?.fetchUseditem.seller.name}</S.Seller>
                  <S.CreatedAt>
                    {getDate(data?.fetchUseditem.createdAt)}
                  </S.CreatedAt>
                </S.SellerAndDateBox>
              </S.ProductAndDateBox>
            </S.UserInfoBox>
            <S.PickAndLinkBox>
              <S.LinkBox>
                <LinkSvg />
              </S.LinkBox>
              <S.PickBox onClick={onClickPick}>
                <PickFalseSvg />
              </S.PickBox>
              <S.PickCount>{data?.fetchUseditem.pickedCount}</S.PickCount>
            </S.PickAndLinkBox>
          </S.Header>
          <S.UnderLine></S.UnderLine>
          <S.Body>
            <S.Remarks>{data?.fetchUseditem.remarks}</S.Remarks>
            <S.Price>
              ₩
              {`${String(data?.fetchUseditem.price).replace(
                /(\d)(?=(?:\d{3})+(?!\d))/g,
                "$1,"
              )}`}
            </S.Price>
            <S.ImgBoxFlex>
              <S.ImgBox>
                <S.MainImg
                  style={{
                    backgroundImage: changeImg
                      ? `url(https://storage.googleapis.com/${changeImg})`.replaceAll(
                          " ",
                          "%20"
                        )
                      : `url(https://storage.googleapis.com/${data?.fetchUseditem.images[0]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                  }}
                ></S.MainImg>
                <S.ListImgBox>
                  <S.ListImg
                    onClick={onClickImg}
                    style={{
                      backgroundImage:
                        `url(https://storage.googleapis.com/${data?.fetchUseditem.images[0]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "contain",
                    }}
                    id={data?.fetchUseditem.images[0]}
                  ></S.ListImg>
                  <S.ListImg
                    onClick={onClickImg}
                    style={{
                      backgroundImage:
                        `url(https://storage.googleapis.com/${data?.fetchUseditem.images[1]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "contain",
                    }}
                    id={data?.fetchUseditem.images[1]}
                  ></S.ListImg>
                  <S.ListImg
                    onClick={onClickImg}
                    style={{
                      backgroundImage:
                        `url(https://storage.googleapis.com/${data?.fetchUseditem.images[2]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "contain",
                    }}
                    id={data?.fetchUseditem.images[2]}
                  ></S.ListImg>
                  {/* <S.ListImg
                    onClick={onClickImg}
                    style={{
                      backgroundImage:
                        `url(https://storage.googleapis.com/${data?.fetchUseditem.images[3]})`.replaceAll(
                          " ",
                          "%20"
                        ),
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "contain",
                    }}
                    id={data?.fetchUseditem.images[3]}
                  ></S.ListImg> */}
                </S.ListImgBox>
              </S.ImgBox>
            </S.ImgBoxFlex>

            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(data?.fetchUseditem.contents),
                }}
              ></S.Contents>
            ) : (
              <S.Contents></S.Contents>
            )}
            <S.TagBox>
              {data?.fetchUseditem.tags.map((tagMap) => (
                <S.Tags key={uuidV4()}>#{tagMap.replaceAll(",", "")}</S.Tags>
              ))}
            </S.TagBox>
          </S.Body>
          <S.UnderLine></S.UnderLine>
          <S.Footer>
            <S.AddressBox>
              <S.Address>
                {data?.fetchUseditem.useditemAddress.address}
              </S.Address>
              <S.AddressDetail>
                {data?.fetchUseditem.useditemAddress.addressDetail}
              </S.AddressDetail>
            </S.AddressBox>
            <S.Map>
              <MapsWriteAndDetail data={data} />
            </S.Map>
          </S.Footer>
        </S.ProductWrapper>
        <S.BtnBox>
          <S.List onClick={onClickList}>목록으로</S.List>
          {sellerID === loggedInId ? (
            <>
              <S.Update onClick={onClickUpdate}>수정하기</S.Update>
              <S.Delete onClick={onClickDelete}>삭제하기</S.Delete>{" "}
            </>
          ) : (
            <S.Buy onClick={onClickBuying}>구매하기</S.Buy>
          )}
        </S.BtnBox>
      </S.Wrapper>
      <BoardCommentWrite isAsk={true} />
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true || false}
      >
        {comments ? (
          comments?.fetchUseditemQuestions.map((el, index) => {
            return (
              <ProductCommentList
                key={el._id}
                el={el}
                index={index}
                comments={comments}
              />
            );
          })
        ) : (
          <></>
        )}
      </InfiniteScroll>
      <VisitedProducts />
    </>
  );
}
