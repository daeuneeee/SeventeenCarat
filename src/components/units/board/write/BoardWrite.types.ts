import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  passwordError: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  titleError: string;
  onChangeContents: (value: string) => void;
  contentsError: string;
  onChangeZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  youtubeError: string;
  onClickRegister: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data: any;
  addressError: string;
  addressDetailError: string;
  isOpen: boolean;
  address: string;
  zipCode: string;
  onToggleModal: () => void;
  handleComplete: (address: Address) => void;
  onClickRegisterCancel: () => void;
  onClickUpdateCancel: () => void;
  fileRef: RefObject<HTMLInputElement>;
  onChangeFile1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile2: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile3: (event: ChangeEvent<HTMLInputElement>) => void;
  imgUrl1: string;
  imgUrl2: string;
  imgUrl3: string;
  contents: string;
}

export interface IMyVariablesProps {
  boardId: string;
  password?: string;
  updateBoardInput: {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    images?: string[];
    boardAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
    };
  };
}

export interface IRegisterProps {
  isActive: boolean;
}
