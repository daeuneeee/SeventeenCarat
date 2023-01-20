import PickTrueSvg from "../../../commons/svg/picktrue";
import * as S from "../../../../commons/styles/myPageStyles";

export default function BoughtUI({ data }) {
  return (
    <>
      <S.Wrapper>
        {data?.fetchUseditemsIBought.map((boughtItemsMap) => (
          <S.ListBox key={boughtItemsMap._id}>
            <S.ImgBox
              style={{
                backgroundImage:
                  `url(https://storage.googleapis.com/${boughtItemsMap.images[0]})`.replaceAll(
                    " ",
                    "%20"
                  ),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
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
                    <S.SellerImg></S.SellerImg>
                    <S.SellerName>{boughtItemsMap.seller.name}</S.SellerName>
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
      </S.Wrapper>
    </>
  );
}
