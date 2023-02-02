import styled from "@emotion/styled";
import { string } from "yup";

export const LoginBtn = styled.button`
  width: 75%;
  margin-top: 20px;
  height: 50px;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #f8cacc, #8da4d0);
  border: 1px solid #f8cacc;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

interface ILoginSignUpButton {
  title: string;
}

export default function LoginSignUpButton(props: ILoginSignUpButton) {
  return (
    <>
      <LoginBtn>{props.title}</LoginBtn>
    </>
  );
}
