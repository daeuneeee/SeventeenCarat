import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 9999;
`;

export const SignUpModal = styled.div`
  width: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  padding-bottom: 40px;
  z-index: 9999;
`;

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 3.8rem;
  margin-top: 40px;
`;

export const UnderLine = styled.div`
  width: 80%;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #f8cacc, #8da4d0) 1;
  margin-top: 20px;
`;

export const InputDiv = styled.div`
  width: 75%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  margin-bottom: 10px;
`;

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

export const CheckBoxDiv = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding-left: 5px;
  font-size: 1.3rem;
`;

export const AutoLogin = styled.input`
  font-size: 1.6rem;
`;

export const SignUpBtn = styled.button`
  width: 75%;
  margin-top: 30px;
  height: 50px;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #f8cacc, #8da4d0);
  border: 1px solid #f8cacc;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const SignUpOpt = styled.div`
  width: 72%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 1.4rem;
  justify-content: space-between;
`;

export const Login = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

export const Error = styled.div`
  padding-left: 10px;
  color: red;
  margin-top: 3px;
`;
