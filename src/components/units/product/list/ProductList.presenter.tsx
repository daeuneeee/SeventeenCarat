import Link from "next/link";
import * as S from "./ProductList.styles";
import PenSvg from "../../../commons/svg/pen";
import { IBoardListUIProps } from "./ProductList.types";
import InfiniteScroll from "react-infinite-scroller";
import InfiniteProduct from "../../../commons/infiniteProductList";
import VisitedProducts from "../../../commons/vistedProducts";
import { v4 as uuidV4 } from "uuid";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState, isUpdateState } from "../../../../commons/store";
import PickSvg from "../../../commons/svg/picktrue";
import { IUseditem } from "../../../../commons/types/generated/types";

export default function ProductListUI({
  data,
  onClickMoveToRegister,
  result,
  onClickSearch,
  onChangeSearch,
  onLoadMore,
}: IBoardListUIProps) {
  const accessToken = useRecoilValue(accessTokenState);
  const setIsUpdate = useSetRecoilState(isUpdateState);

  const onClickProduct = (product: IUseditem) => () => {
    const products = JSON.parse(localStorage.getItem("products") ?? "[]");

    const temp = products.filter((el: IUseditem) => el._id === product._id);
    if (temp.length === 1) return;

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
            <S.BodySell></S.BodySell>
            <S.BodyTitle
              placeholder="제목을 검색해주세요."
              onChange={onChangeSearch}
            />
            <S.BodySearch onClick={onClickSearch}>검색하기</S.BodySearch>
          </S.BodyTop>
          <S.BodyBox>
            <InfiniteScroll
              pageStart={0}
              useWindow={false}
              loadMore={onLoadMore}
              hasMore={true || false}
            >
              <S.BodyListBox>
                {data?.fetchUseditems.map((el) => (
                  <InfiniteProduct key={uuidV4()} el={el} />
                ))}
              </S.BodyListBox>
            </InfiniteScroll>
          </S.BodyBox>
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
