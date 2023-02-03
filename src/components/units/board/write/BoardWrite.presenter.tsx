import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import "react-quill/dist/quill.snow.css";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Header>게시물 {props.isEdit ? "수정" : "등록"}</S.Header>
      <S.User>
        <div>
          <S.Label>작성자</S.Label>
          <S.UserInput
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            type="text"
            defaultValue={props.data?.fetchBoard.writer}
          />
          <S.Error>{props.writerError}</S.Error>
        </div>
        <div>
          <S.Label>비밀번호</S.Label>
          <S.UserInput
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
            type="password"
          />
          <S.Error>{props.passwordError}</S.Error>
        </div>
      </S.User>
      <S.TitleDiv>
        <S.Label>제목</S.Label>
        <S.Title
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          type="text"
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.titleError}</S.Error>
      </S.TitleDiv>
      <S.ContentsDiv>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          value={props.contents || props.data?.fetchBoard.contents || ""}
        />
        <S.Error>{props.contentsError}</S.Error>
      </S.ContentsDiv>
      <S.Label>주소</S.Label>
      <S.ZipCodeDiv>
        <S.Number
          disabled
          placeholder="00000"
          onChange={props.onChangeZipCode}
          value={
            props.zipCode || props.data?.fetchBoard.boardAddress?.zipcode || ""
          }
        />
        <S.Search onClick={props.onToggleModal}>우편번호 검색</S.Search>
        <>
          {props.isOpen && (
            <Modal
              title="주소검색"
              visible={props.isOpen}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
              footer={null}
            >
              <DaumPostcodeEmbed onComplete={props.handleComplete} />
            </Modal>
          )}
        </>
        <S.Error>{props.addressError}</S.Error>
      </S.ZipCodeDiv>
      <S.AddressDiv>
        <S.AddressInput
          type="text"
          onChange={props.onChangeAddress}
          disabled
          value={
            props.address || props.data?.fetchBoard.boardAddress?.address || ""
          }
        />
        <S.AddressInput
          type="text"
          onChange={props.onChangeAddressDetail}
          defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
        />
      </S.AddressDiv>
      <S.Error>{props.addressDetailError}</S.Error>
      <S.YoutubeBox>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 입력해주세요."
          onChange={props.onChangeYoutube}
          type="text"
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
        <S.Error>{props.youtubeError}</S.Error>
      </S.YoutubeBox>
      <S.Footer>
        <S.Label>사진첨부</S.Label>
        <S.ImgBox>
          <S.UploadDiv>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={props.onChangeFile1}
              id="file01"
            />
            {props.imgUrl1 ? (
              <S.Upload
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${props.imgUrl1})`,
                  backgroundSize: "cover",
                }}
                htmlFor="file01"
              ></S.Upload>
            ) : (
              <S.Upload htmlFor="file01">+</S.Upload>
            )}
          </S.UploadDiv>
          <S.UploadDiv>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={props.onChangeFile2}
              id="file02"
            />
            {props.imgUrl2 ? (
              <S.Upload
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${props.imgUrl2})`,
                  backgroundSize: "cover",
                }}
                htmlFor="file02"
              ></S.Upload>
            ) : (
              <S.Upload htmlFor="file02">+</S.Upload>
            )}
          </S.UploadDiv>
          <S.UploadDiv>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={props.onChangeFile3}
              id="file03"
            />
            {props.imgUrl3 ? (
              <S.Upload
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${props.imgUrl3})`,
                  backgroundSize: "cover",
                }}
                htmlFor="file03"
              ></S.Upload>
            ) : (
              <S.Upload htmlFor="file03">+</S.Upload>
            )}
          </S.UploadDiv>
        </S.ImgBox>
        <S.RegisterDiv>
          <S.Register
            onClick={props.isEdit ? props.onClickUpdate : props.onClickRegister}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Register>
          <S.Cancel
            onClick={
              props.isEdit
                ? props.onClickUpdateCancel
                : props.onClickRegisterCancel
            }
          >
            취소하기
          </S.Cancel>
        </S.RegisterDiv>
      </S.Footer>
    </S.Wrapper>
  );
}
