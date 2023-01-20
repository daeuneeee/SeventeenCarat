import styled from "@emotion/styled";

export const ComWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`;
export const ComContentsListBox = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  padding: 26px 0 20px 0;
  /* border-bottom: 1px solid #f8cacc; */
  justify-content: space-between;
`;

export const ComContentsListUserBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`;

export const ComContentsListDate = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  padding-left: 60px;
  color: #bdbdbd;
`;

export const ComContentsListUserImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const ComContentsListUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  justify-content: space-between;
`;

export const ComContentsListEditBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  top: 6px;
  right: 20px;
`;

export const ComContentsListEditBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ComContentsListDeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ComContentsListEdit = styled.img`
  width: 15px;
  height: 15px;
`;

export const ComContentsListDelete = styled.div`
  width: 15px;
  height: 15px;
`;

export const ComContentsListUserName = styled.div`
  /* display: flex;
  flex-direction: row;
  gap: 5px; */
  font-size: 1.6rem;
  font-weight: 500;
`;

export const UserNameSpan = styled.span`
  margin-right: 10px;
`;

export const ComContentsListContents = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ComUserBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 20px;
  padding: 0px;
  align-items: center;
  position: relative;
`;

export const ComUserName = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
  border: 1px solid #8da4d0;
  color: black;
  font-size: 1.6rem;
  outline-color: #f8cacc;
  border-radius: 5px;
  &::placeholder {
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
  }
  &:disabled {
    background-color: #7e93bb;
    opacity: 0.8;
    color: white;
  }
`;

export const ComUserPassword = styled.input`
  width: 180px;
  height: 52px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #8da4d0;
  color: black;
  outline-color: #f8cacc;
  background-color: white;
  font-size: 1.6rem;
  border-radius: 5px;
  &::placeholder {
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const ComContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ComContents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px 0 0 20px;
  border: 1px solid #8da4d0;
  background-color: white;
  outline-color: #f8cacc;
  color: black;
  resize: none;
  border-radius: 5px;
  font-size: 1.6rem;
  &::placeholder {
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const ComContentsOptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ComContentsCount = styled.div`
  width: 100%;
  height: 52px;
  color: white;
  background-color: #8da4d0;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 14px 0 0 20px;
  border: none;
  border-radius: 5px;
`;

export const ComContentsRegister = styled.button`
  width: 91px;
  height: 52px;
  background-color: #f8cacc;
  border: 1px solid #f8cacc;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: 3px solid #f8cacc;
  }
`;

export const ComContentEditCancelBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 15px;
  right: 6px;
  cursor: pointer;
  path {
    fill: #f8cacc;
  }
`;
