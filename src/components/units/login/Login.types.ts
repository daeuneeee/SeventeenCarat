import {
  FieldError,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  onClickWrapper: () => void;
  isActiveLogin: boolean;
  onClickLogin: (data: IData) => void;
  register: UseFormRegister<IData>;
  errors: IError;
  handleSubmit: UseFormHandleSubmit<IData>;
  onClickSignUp: () => void;
}

export interface IError {
  email?: FieldError;
  password?: FieldError;
}
