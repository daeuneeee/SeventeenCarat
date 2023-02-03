import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { IRegisterProps } from "./BoardWrite.types";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  background-color: white;
  color: black;
`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  /* padding-left: 10px; */
`;

export const UserInput = styled.input`
  width: 486px;
  height: 52px;
  padding: 20px;
  border: 1px solid #f8cacc;
  margin-top: 10px;
  font-size: 1.6rem;
  outline-color: #8da4d0;
  border-radius: 5px;
`;

export const TitleDiv = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.input`
  width: 996px;
  height: 52px;
  padding: 20px;
  outline-color: #8da4d0;
  margin-top: 10px;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const Contents = styled(ReactQuill)`
  width: 996px;
  height: 480px;
  vertical-align: top;
  border: 1px solid #f8cacc;
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.6rem;
  resize: none;
  word-wrap: break-word;
  outline-color: #8da4d0;
  word-break: keep-all;
  border-radius: 5px;
  :focus-within {
    border: 2px solid #8da4d0;
  }
  /* display: none; */
  & .ql-snow {
    border: none;
  }
  & .ql-toolbar {
    border: none;
    border-bottom: 1px solid #f8cacc;
  }
  .ql-editor {
    height: 90%;
    font-family: "inthesoop";
    font-size: 1.6rem;
  }
`;

export const ContentsDiv = styled.div`
  margin-bottom: 16px;
`;

export const ZipCodeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Number = styled.input`
  width: 77px;
  height: 45;
  text-align: center;
  margin: 10px 0px;
  border: 1px solid #f8cacc;
  padding: 10px;
  font-size: 1.6rem;
  margin-right: 20px;
  border-radius: 5px;
`;

export const Search = styled.button`
  width: 152px;
  height: 45px;
  font-size: 1.6rem;
  background-color: #f8cacc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
    border-radius: 5px;
  }
`;

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
  gap: 20px;
`;

export const AddressInput = styled.input`
  width: 996px;
  font-size: 1.6rem;
  height: 45px;
  border: 1px solid #f8cacc;
  padding: 20px;
  outline-color: #8da4d0;
  border-radius: 5px;
`;

export const Youtube = styled.input`
  width: 996px;
  border: 1px solid #f8cacc;
  height: 45px;
  padding: 20px;
  font-size: 1.6rem;
  margin: 10px 0px 0px 0px;
  outline-color: #8da4d0;
  border-radius: 5px;
`;

export const YoutubeBox = styled.div`
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const Footer = styled.div`
  font-size: 1.6rem;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Upload = styled.label`
  display: block;
  width: 78px;
  height: 78px;
  margin: 10px 24px 40px 0px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #f8cacc, #8da4d0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 80px;
`;

export const Register = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 5px;
  color: ${(props: IRegisterProps) => (props.isActive ? "white" : "none")};
  background-color: ${(props: IRegisterProps) =>
    props.isActive ? "#F8CACC" : "none"};
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const Cancel = styled.button`
  width: 179px;
  height: 52px;
  color: black;
  background-color: none;
  border: none;
  font-size: 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    color: white;
  }
`;

export const Select = styled.input`
  margin: 16px 14px 80px 22px;
  font-size: 1.6rem;
`;

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-left: 10px;
`;
