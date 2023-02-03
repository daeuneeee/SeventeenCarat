import Paginations01 from "../../../commons/paginations/01/Pagenations01.container";
import PickTrueSvg from "../../../commons/svg/picktrue";
import * as S from "../myPageStyles";
import { IPickedUiProps } from "./PickedPage.types";

export default function PickedUI({ data, refetch, count }: IPickedUiProps) {
  return (
    <>
      <S.Wrapper>
        {data?.fetchUseditemsIPicked.map((pickListMap) => (
          <S.ListBox key={pickListMap._id}>
            <S.ImgBox
              style={{
                backgroundImage:
                  `url(https://storage.googleapis.com/${pickListMap.images?.[0]})`.replaceAll(
                    " ",
                    "%20"
                  ),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></S.ImgBox>
            <S.InformAndPriceBox>
              <S.InformBox>
                <S.InformBoxTop>
                  <S.Name>{pickListMap.name}</S.Name>
                  <S.Remarks>{pickListMap.remarks}</S.Remarks>
                  <S.Tags>{pickListMap.tags}</S.Tags>
                </S.InformBoxTop>
                <S.InformBoxBottom>
                  <S.SellerBox>
                    <S.SellerName>{pickListMap.seller?.name}</S.SellerName>
                  </S.SellerBox>
                  <S.PickCountBox>
                    <S.PickSvgBox>
                      <PickTrueSvg />
                    </S.PickSvgBox>
                    <S.PickedCount>{pickListMap.pickedCount}</S.PickedCount>
                  </S.PickCountBox>
                </S.InformBoxBottom>
              </S.InformBox>
              <S.PriceBox>
                <S.PriceIcon>₩</S.PriceIcon>
                <S.Price>{`${String(pickListMap.price).replace(
                  /(\d)(?=(?:\d{3})+(?!\d))/g,
                  "$1,"
                )}${" "}`}</S.Price>
              </S.PriceBox>
            </S.InformAndPriceBox>
          </S.ListBox>
        ))}
        <S.Footer>
          <Paginations01 refetch={refetch} count={count} />
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
