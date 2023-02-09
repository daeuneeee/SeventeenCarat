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

export const LoginModal = styled.div`
  width: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  z-index: 9999;
`;

export const LoginDiv = styled.div`
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  margin-top: 10px;
`;

export const LoginOpt = styled.div`
  width: 72%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 1.3rem;
  justify-content: space-between;
`;

export const FindDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SignFind = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
`;

export const Error = styled.div`
  padding-left: 10px;
  color: red;
  margin-top: 3px;
`;
