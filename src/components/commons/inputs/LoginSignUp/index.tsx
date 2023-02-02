import styled from "@emotion/styled";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { IData } from "../../../units/login/Login.types";

export const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0px 20px;
  outline-color: #8da4d0;
  ::placeholder {
    color: #ccc;
    font-size: 1.5rem;
  }
`;

interface ILoginSignUpInputProps {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export default function LoginSignUpInput(props: ILoginSignUpInputProps) {
  return (
    <>
      <InputStyle
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </>
  );
}
