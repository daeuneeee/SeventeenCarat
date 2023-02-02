import {
  FieldError,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email: string;
  password: string;
  passwordCheck?: string;
  name: string;
}

export interface ISignUpUIProps {
  isActiveSignUp: boolean;
  onClickWrapper: () => void;
  onClickSignUp: (data: IData) => void;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  errors: IError;
  onClickLogin: () => void;
}

export interface IError {
  email?: FieldError;
  password?: FieldError;
  name?: FieldError;
  passwordCheck?: FieldError;
}
