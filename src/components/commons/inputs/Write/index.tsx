import styled from "@emotion/styled";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

export const InputStyle = styled.input`
  width: 996px;
  height: 52px;
  padding: 20px;
  outline-color: #8da4d0;
  margin-top: 10px;
  border: 1px solid rgb(248, 202, 204);
  font-size: 1.6rem;
  border-radius: 5px;
  /* box-shadow: rgba(248, 202, 204, 0.15) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
`;

interface IWriteInputProps {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  defaultValue: string | number | string[];
}

export default function WriteInput(props: IWriteInputProps) {
  return (
    <>
      <InputStyle
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
        defaultValue={props.defaultValue}
      />
    </>
  );
}
