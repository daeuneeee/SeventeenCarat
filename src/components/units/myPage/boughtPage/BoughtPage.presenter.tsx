import Paginations01 from "../../../commons/paginations/01/Pagenations01.container";
import PickTrueSvg from "../../../commons/svg/picktrue";
import * as S from "../myPageStyles";
import { IBoughtUIProps } from "./BoughtPage.types";

export default function BoughtUI({ data, refetch, count }: IBoughtUIProps) {
  return (
    <>
      <S.Wrapper>
        {data?.fetchUseditemsIBought.map((boughtItemsMap) => (
          <S.ListBox key={boughtItemsMap._id}>
            <S.ImgBox
              style={{
                backgroundImage:
                  `url(https://storage.googleapis.com/${boughtItemsMap.images?.[0]})`.replaceAll(
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
                  <S.Name>{boughtItemsMap.name}</S.Name>
                  <S.Remarks>{boughtItemsMap.remarks}</S.Remarks>
                  <S.Tags>{boughtItemsMap.tags}</S.Tags>
                </S.InformBoxTop>
                <S.InformBoxBottom>
                  <S.SellerBox>
                    <S.SellerName>{boughtItemsMap.seller?.name}</S.SellerName>
                  </S.SellerBox>
                  <S.PickCountBox>
                    <S.PickSvgBox>
                      <PickTrueSvg />
                    </S.PickSvgBox>
                    <S.PickedCount>{boughtItemsMap.pickedCount}</S.PickedCount>
                  </S.PickCountBox>
                </S.InformBoxBottom>
              </S.InformBox>
              <S.PriceBox>
                <S.PriceIcon>₩</S.PriceIcon>
                <S.Price>{`${String(boughtItemsMap.price).replace(
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
