import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  background-color: white;
  color: black;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const Label = styled.span`
  font-size: 1.6rem;
  /* padding-left: 10px; */
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  margin-bottom: 40px;
`;

// export const Input = styled.input`
//   width: 996px;
//   height: 52px;
//   padding: 10px;
//   outline-color: #8da4d0;
//   margin-top: 10px;
//   border: 1px solid rgb(248, 202, 204);
//   font-size: 1.6rem;
//   border-radius: 5px;
//   /* box-shadow: rgba(248, 202, 204, 0.15) 0px 6px 12px -2px,
//     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
// `;

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-left: 10px;
`;

export const SmartEditorBox = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  padding: 10px;
  outline-color: #8da4d0;
  margin-top: 10px;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
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
    height: 85%;
    font-family: "inthesoop";
    font-size: 1.6rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 40px;
`;

export const MapImg = styled.div`
  width: 384px;
  height: 252px;
`;

export const GpsAddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GpsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LatLngBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const ZipCode = styled.input`
  width: 78px;
  height: 52px;
  text-align: center;
  font-size: 1.6rem;
  color: #888888;
  outline-color: #8da4d0;
  border: 1px solid rgb(248, 202, 204);
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const ZipCodeBtn = styled.button`
  width: 108px;
  height: 52px;
  font-size: 1.6rem;
  background-color: #f8cacc;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;
export const AddressInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 10px;
`;

export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  padding: 20px;
  outline-color: #8da4d0;
  border: 1px solid rgb(248, 202, 204);
  font-size: 1.6rem;
  border-radius: 5px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  gap: 20px;
`;

export const Img = styled.label`
  width: 100px;
  height: 100px;
  /* border: 1px solid rgb(248, 202, 204); */
  font-size: 1.6rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8cacc, #8da4d0);
  cursor: pointer;
`;

export const MainImgBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export const RadioInputDiv = styled.div`
  font-size: 1.6rem;
  display: flex;
  gap: 3px;
`;

export const Register = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 5px;
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
