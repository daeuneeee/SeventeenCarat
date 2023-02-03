import Paginations01 from "../../../commons/paginations/01/Pagenations01.container";
import PickTrueSvg from "../../../commons/svg/picktrue";
import * as S from "../myPageStyles";
import { IUploadUIProps } from "./UploadPage.types";

export default function UploadUI({ data, refetch, count }: IUploadUIProps) {
  return (
    <>
      <S.Wrapper>
        {data?.fetchUseditemsISold.map((SoldItemsMap) => (
          <S.ListBox key={SoldItemsMap._id}>
            <S.ImgBox
              style={{
                backgroundImage:
                  `url(https://storage.googleapis.com/${SoldItemsMap.images?.[0]})`.replaceAll(
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
                  <S.Name>{SoldItemsMap.name}</S.Name>
                  <S.Remarks>{SoldItemsMap.remarks}</S.Remarks>
                  <S.Tags>{SoldItemsMap.tags}</S.Tags>
                </S.InformBoxTop>
                <S.InformBoxBottom>
                  <S.SellerBox>
                    <S.SellerName>{SoldItemsMap.seller?.name}</S.SellerName>
                  </S.SellerBox>
                  <S.PickCountBox>
                    <S.PickSvgBox>
                      <PickTrueSvg />
                    </S.PickSvgBox>
                    <S.PickedCount>{SoldItemsMap.pickedCount}</S.PickedCount>
                  </S.PickCountBox>
                </S.InformBoxBottom>
              </S.InformBox>
              <S.PriceBox>
                <S.PriceIcon>₩</S.PriceIcon>
                <S.Price>{`${String(SoldItemsMap.price).replace(
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
