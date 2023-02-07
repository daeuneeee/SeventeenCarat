import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariablesProps } from "./BoardWrite.types";
import { Address } from "react-daum-postcode";

import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtube, setYoutube] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressDetailError, setAddressDetailError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      writer &&
      password &&
      title &&
      contents &&
      youtube &&
      address &&
      addressDetail
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [writer, password, title, contents, youtube, address, addressDetail]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    onToggleModal();
    setAddress(address.address);
    setZipCode(address.zonecode);
  };

  const onClickRegister = async () => {
    if (writer === "") {
      setWriterError("이름을 입력해주세요");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요");
    }

    if (youtube === "") {
      setYoutubeError("링크를 입력해주세요");
    }

    if (address === "") {
      setAddressError("우편번호를 입력해주세요");
    }

    if (addressDetail === "") {
      setAddressDetailError("상세주소를 입력해주세요");
    }

    if (
      writer &&
      password &&
      title &&
      contents &&
      youtube &&
      address &&
      addressDetail
    ) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl: youtube,
            boardAddress: {
              zipcode: zipCode,
              address,
              addressDetail,
            },
            images: [imgUrl1, imgUrl2, imgUrl3],
          },
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      Modal.success({ content: "게시글 등록이 완료되었습니다." });
      if (typeof result.data?.createBoard._id === "string") {
        await router.push(`/boards/${result.data?.createBoard._id}`);
      }
    }
  };

  const onClickRegisterCancel = () => [router.push(`/boards/`)];

  const onClickUpdateCancel = async () => {
    if (typeof router.query.boardId === "string") {
      void router.push(`/boards/${router.query.boardId}`);
    }
  };

  const onClickUpdate = async () => {
    try {
      const myVariables: IMyVariablesProps = {
        boardId: String(router.query.boardId),
        password: "",
        updateBoardInput: {},
      };
      if (zipCode || address || addressDetail) {
        myVariables.updateBoardInput.boardAddress = {};
        if (zipCode)
          myVariables.updateBoardInput.boardAddress.zipcode = zipCode;
        if (address)
          myVariables.updateBoardInput.boardAddress.address = address;
        if (addressDetail)
          myVariables.updateBoardInput.boardAddress.addressDetail =
            addressDetail;
      }
      if (password) myVariables.password = password;
      if (title) myVariables.updateBoardInput.title = title;
      if (contents) myVariables.updateBoardInput.contents = contents;
      if (youtube) myVariables.updateBoardInput.youtubeUrl = youtube;
      if (imgUrl1 || imgUrl2 || imgUrl3)
        myVariables.updateBoardInput.images = [imgUrl1, imgUrl2, imgUrl3];

      await updateBoard({
        variables: myVariables,
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      Modal.success({ content: "정상적으로 수정되었습니다." });
      if (typeof router.query.boardId === "string") {
        await router.push(`/boards/${router.query.boardId}`);
      }
    } catch (error) {
      Modal.error({ content: "비밀번호를 확인해주세요." });
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (value: string) => {
    setContents(value);
    if (value !== "") {
      setContentsError("");
    }
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
    if (event.target.value !== "") {
      setYoutubeError("");
    }
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    if (event.target.value !== "") {
      setAddressError("");
    }
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    if (event.target.value !== "") {
      setAddressDetailError("");
    }
  };

  const onChangeZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const onChangeFile1 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl1(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFile2 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl2(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFile3 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl3(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  useEffect(() => {
    if (props.data?.fetchBoard.images?.[0]) {
      setImgUrl1(props.data?.fetchBoard.images[0]);
    }
    if (props.data?.fetchBoard.images?.[1]) {
      setImgUrl2(props.data?.fetchBoard.images[1]);
    }
    if (props.data?.fetchBoard.images?.[2]) {
      setImgUrl3(props.data?.fetchBoard.images[2]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      writerError={writerError}
      onChangePassword={onChangePassword}
      passwordError={passwordError}
      onChangeTitle={onChangeTitle}
      titleError={titleError}
      onChangeContents={onChangeContents}
      contentsError={contentsError}
      onChangeZipCode={onChangeZipCode}
      onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutube={onChangeYoutube}
      youtubeError={youtubeError}
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      addressError={addressError}
      addressDetailError={addressDetailError}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      address={address}
      zipCode={zipCode}
      onClickRegisterCancel={onClickRegisterCancel}
      onClickUpdateCancel={onClickUpdateCancel}
      fileRef={fileRef}
      onChangeFile1={onChangeFile1}
      onChangeFile2={onChangeFile2}
      onChangeFile3={onChangeFile3}
      imgUrl1={imgUrl1}
      imgUrl2={imgUrl2}
      imgUrl3={imgUrl3}
      contents={contents}
    />
  );
}
