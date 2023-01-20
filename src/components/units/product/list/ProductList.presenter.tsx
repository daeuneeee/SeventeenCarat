// import { getDate } from "../../../../commons/libraries/utils";
import Link from "next/link";
import * as S from "./ProductList.styles";
import PenSvg from "../../../commons/svg/pen";
import LikeSvg from "../../../commons/svg/like";
import { IBoardListUIProps } from "./ProductList.types";
import { DatePicker, Space } from "antd";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import InfiniteProduct from "../../../commons/infiniteProductList";
import VisitedProducts from "../../../commons/vistedProducts";
// import Paginations01 from "../../../commons/paginations/01/Pagenations01.container";
import { v4 as uuidV4 } from "uuid";
import { useRecoilState } from "recoil";
import { accessTokenState, isUpdateState } from "../../../../commons/store";
import PickSvg from "../../../commons/svg/picktrue";
// import { IBoard } from "../../../../commons/types/generated/types";

const { RangePicker } = DatePicker;

const RangePickerStyle = styled(RangePicker)`
  border: none;
  :focus-within {
    box-shadow: none;
  }
`;

export default function ProductListUI({
  data,
  onClickMoveToRegister,
  result,
  refetch,
  count,
  onClickSearch,
  onChangeSearch,
  keyword,
  onLoadMore,
}: IBoardListUIProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);

  const onClickProduct = (product) => () => {
    // 1. 기존 장바구니 가져오기
    const products = JSON.parse(localStorage.getItem("products") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = products.filter((el) => el._id === product._id);
    if (temp.length === 1) return;

    // 3. 해당 장바구니에 담기
    products.unshift(product);
    if (products.length > 5) {
      products.pop();
    }
    localStorage.setItem("products", JSON.stringify(products));
    setIsUpdate((prev) => prev + 1);
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>베스트 상품</S.Title>
          <S.Best>
            {result?.fetchUseditemsOfTheBest.map((el) => (
              <Link href={`products/${el._id}`} key={el._id}>
                <S.BestBox onClick={onClickProduct(el)}>
                  {el.images?.[0] ? (
                    <S.BestBoxImg
                      className="bestBoxImg"
                      style={{
                        backgroundImage:
                          `url(https://storage.googleapis.com/${el.images[0]})`.replaceAll(
                            " ",
                            "%20"
                          ),
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                      }}
                    ></S.BestBoxImg>
                  ) : (
                    <S.BestBoxImg className="bestBoxImg">
                      <S.ImgSpan>NO IMAGE</S.ImgSpan>
                    </S.BestBoxImg>
                  )}

                  <S.BestBoxContent>
                    <S.BestBoxName>{el.name}</S.BestBoxName>
                    <S.BestBoxBody>
                      <S.BestBoxInfo>
                        <S.BestBoxUser>
                          <S.BestBoxRemarks>{el.remarks}</S.BestBoxRemarks>
                        </S.BestBoxUser>
                        <S.BestBoxPrice>
                          ₩
                          {`${String(el.price).replace(
                            /(\d)(?=(?:\d{3})+(?!\d))/g,
                            "$1,"
                          )}${" "}`}
                        </S.BestBoxPrice>
                      </S.BestBoxInfo>
                      <S.BestBoxLike>
                        <S.BestBoxLikeImg>
                          <PickSvg />
                        </S.BestBoxLikeImg>
                        <S.BestBoxPickedCount>
                          {el.pickedCount}
                        </S.BestBoxPickedCount>
                      </S.BestBoxLike>
                    </S.BestBoxBody>
                  </S.BestBoxContent>
                </S.BestBox>
              </Link>
            ))}
          </S.Best>
        </S.Header>
        <S.Body>
          <S.BodyTop>
            <S.BodySell>
              <span>판매중인상품</span>
              <span>판매된상품</span>
            </S.BodySell>
            <S.BodyTitle
              placeholder="제목을 검색해주세요."
              onChange={onChangeSearch}
            />
            {/* <S.BodyDateBox>
              <Space direction="vertical" size={12}>
                <RangePickerStyle />
              </Space>
            </S.BodyDateBox> */}
            <S.BodySearch onClick={onClickSearch}>검색하기</S.BodySearch>
          </S.BodyTop>
          <div style={{ width: "1220px", height: "800px", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              useWindow={false}
              loadMore={onLoadMore}
              hasMore={true || false}
            >
              <S.BodyListBox>
                {/* {data?.fetchBoards.map((el, index) => (
            <S.BodyContentsList key={el._id}>
              <S.ListNumber>{index + 1}</S.ListNumber>
              <Link href={`boards/${el._id}`}>
                <S.ListTitle>
                  {el.title
                    .replaceAll(keyword, `!@#@${keyword}!@#@`)
                    .split("!@#@")
                    .map((word) => (
                      <span
                        key={uuidV4()}
                        style={{
                          color: word === keyword ? "#F8CACC" : "",
                        }}
                      >
                        {word}
                      </span>
                    ))}
                </S.ListTitle>
              </Link>
              <S.ListWriter>{el.writer}</S.ListWriter>
              <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
            </S.BodyContentsList>
          ))} */}

                {data?.fetchUseditems.map((el, index) => (
                  <InfiniteProduct key={uuidV4()} el={el} index={index} />
                ))}
              </S.BodyListBox>
            </InfiniteScroll>
          </div>
        </S.Body>
        <S.Footer>
          <S.EmptyBox></S.EmptyBox>
          {accessToken ? (
            <S.RegisterBtn onClick={onClickMoveToRegister}>
              <PenSvg></PenSvg>
              상품 등록하기
            </S.RegisterBtn>
          ) : (
            <></>
          )}
        </S.Footer>
      </S.Wrapper>
      <VisitedProducts />
    </>
  );
}
