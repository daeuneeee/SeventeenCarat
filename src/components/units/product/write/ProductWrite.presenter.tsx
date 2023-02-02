import { useRecoilState } from "recoil";
import { mapLatLngState } from "../../../../commons/store";
import WriteInput from "../../../commons/inputs/Write";
import * as S from "../write/ProductWrite.styles";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import MapsWriteAndDetail from "../../../commons/map/writeAndDetail";
import { IProductWriteUIProps } from "./ProductWrite.types";

export default function ProductWriteUI({
  register,
  handleSubmit,
  onClickRegister,
  onClickCancel,
  onChangeContents,
  isEdit,
  data,
  errors,
  isValid,
  onToggleModal,
  isOpen,
  handleComplete,
  address,
  zipCode,
  onChangeFile,
  imageUrls,
  editImageUrls,
  onClickUpdate,
}: IProductWriteUIProps) {
  return (
    <form onSubmit={handleSubmit(isEdit ? onClickUpdate : onClickRegister)}>
      <S.Wrapper>
        <S.Title>상품 {isEdit ? "수정" : "등록"}하기</S.Title>
        <div>
          <S.InputBox>
            <S.Label>상품명</S.Label>
            <WriteInput
              placeholder="상품명을 작성해주세요."
              type="text"
              register={register("name")}
              defaultValue={data?.fetchUseditem.name || ""}
            />
            <S.Error>{errors.name?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>한줄요약</S.Label>
            <WriteInput
              placeholder="한줄요약을 작성해주세요."
              type="text"
              register={register("remarks")}
              defaultValue={data?.fetchUseditem.remarks || ""}
            />
            <S.Error>{errors.remarks?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>상품설명</S.Label>
            <S.SmartEditorBox
              placeholder="상품 상세설명을 작성해주세요."
              onChange={onChangeContents}
              defaultValue={data?.fetchUseditem.contents}
            />
            <S.Error>{errors.contents?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>판매가격</S.Label>
            <WriteInput
              placeholder="가격을 입력해주세요."
              register={register("price")}
              type="number"
              defaultValue={data?.fetchUseditem.price || ""}
            />
            <S.Error>{errors.price?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>태그입력</S.Label>
            <WriteInput
              placeholder="태그를 입력해주세요."
              type="text"
              register={register("tags")}
              defaultValue={data?.fetchUseditem.tags || ""}
            />
          </S.InputBox>
        </div>
        <S.Body>
          <S.GpsAddressBox>
            <S.Label>거래위치</S.Label>
            <S.MapImg>
              <MapsWriteAndDetail data={data} address={address} />
            </S.MapImg>
          </S.GpsAddressBox>
          <S.GpsAddressBox>
            <S.GpsBox>
              <S.Label>우편번호</S.Label>
              <S.LatLngBox>
                <S.ZipCode
                  {...register("useditemAddress.zipcode")}
                  placeholder="00000"
                  value={
                    zipCode ||
                    data?.fetchUseditem.useditemAddress?.zipcode ||
                    ""
                  }
                  readOnly
                />
                <S.ZipCodeBtn type="button" onClick={onToggleModal}>
                  검색하기
                </S.ZipCodeBtn>
                {isOpen && (
                  <Modal
                    title="주소검색"
                    visible={isOpen}
                    onCancel={onToggleModal}
                    footer={null}
                  >
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                  </Modal>
                )}
              </S.LatLngBox>
            </S.GpsBox>
            <S.AddressBox>
              <S.Label>주소</S.Label>
              <S.AddressInputBox>
                <S.AddressInput
                  type="text"
                  {...register("useditemAddress.address")}
                  readOnly
                  value={
                    address ||
                    data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                />
                <S.AddressInput
                  type="text"
                  {...register("useditemAddress.addressDetail")}
                />
              </S.AddressInputBox>
            </S.AddressBox>
          </S.GpsAddressBox>
        </S.Body>
        <S.Footer>
          <S.Label>사진첨부</S.Label>
          <S.ImgBox>
            <input
              type="file"
              onChange={onChangeFile(0)}
              style={{ display: "none" }}
              id="img01"
            />
            {imageUrls?.[0] || editImageUrls?.[0] ? (
              <S.Img
                htmlFor="img01"
                style={{
                  backgroundImage: imageUrls[0]
                    ? `url(${imageUrls?.[0]})`
                    : `url(https://storage.googleapis.com/${editImageUrls?.[0]})`,
                  backgroundSize: "cover",
                }}
              ></S.Img>
            ) : (
              <S.Img htmlFor="img01">+</S.Img>
            )}
            <input
              type="file"
              onChange={onChangeFile(1)}
              style={{ display: "none" }}
              id="img02"
            />
            {imageUrls?.[1] || editImageUrls?.[1] ? (
              <S.Img
                htmlFor="img02"
                style={{
                  backgroundImage: imageUrls[1]
                    ? `url(${imageUrls?.[1]})`
                    : `url(https://storage.googleapis.com/${editImageUrls?.[1]})`,
                  backgroundSize: "cover",
                }}
              ></S.Img>
            ) : (
              <S.Img htmlFor="img02">+</S.Img>
            )}
            <input
              type="file"
              onChange={onChangeFile(2)}
              style={{ display: "none" }}
              id="img03"
            />
            {imageUrls?.[2] || editImageUrls?.[2] ? (
              <S.Img
                htmlFor="img03"
                style={{
                  backgroundImage: imageUrls[2]
                    ? `url(${imageUrls?.[2]})`
                    : `url(https://storage.googleapis.com/${editImageUrls?.[2]})`,
                  backgroundSize: "cover",
                }}
              ></S.Img>
            ) : (
              <S.Img htmlFor="img03">+</S.Img>
            )}
            <input
              type="file"
              onChange={onChangeFile(3)}
              style={{ display: "none" }}
              id="img04"
            />
          </S.ImgBox>
          <S.MainImgBox>
            <S.Label>메인 사진 설정</S.Label>
            <S.RadioBox>
              <S.RadioInputDiv>
                <input type="radio" name="select" value="photo1" /> 사진1
              </S.RadioInputDiv>
              <S.RadioInputDiv>
                <input type="radio" name="select" value="photo2" /> 사진2
              </S.RadioInputDiv>
            </S.RadioBox>
          </S.MainImgBox>
        </S.Footer>
        <S.RegisterDiv>
          <S.Register
            style={
              isEdit
                ? { backgroundColor: "#F8CACC", color: "white" }
                : {
                    backgroundColor: isValid ? "#F8CACC" : "",
                    color: isValid ? "white" : "black",
                  }
            }
          >
            {isEdit ? "수정하기" : "등록하기"}
          </S.Register>
          <S.Cancel type="button" onClick={onClickCancel}>
            취소하기
          </S.Cancel>
        </S.RegisterDiv>
      </S.Wrapper>
    </form>
  );
}
