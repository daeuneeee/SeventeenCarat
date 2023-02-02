import React, { ChangeEvent, SetStateAction } from "react";
import {
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
  Validate,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IData {
  price: number;
  images: (string | undefined)[];
  tags: { split: (arg0: string) => any; shift: () => void };
}

export interface IAddress {
  zonecode: SetStateAction<string>;
  address: SetStateAction<string>;
}

export interface IProductWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickRegister: (data: any) => void;
  onClickCancel: () => void;
  onChangeContents: (value: string) => void;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  errors: IError;
  isValid: boolean;
  onToggleModal: () => void;
  isOpen: boolean;
  handleComplete: (address: IAddress) => void;
  address: string;
  zipCode: string;
  onChangeFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  editImageUrls: string[];
  onClickUpdate: (data: any) => void;
}

interface IError {
  name?: FieldError;
  remarks?: FieldError;
  contents?: FieldError;
  price?: FieldError;
}
