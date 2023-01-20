import styled from "@emotion/styled";

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
  align-items: flex-end;
`;

export const Line = styled.div`
  width: 95%;
  border-bottom: 1px solid #8da4d0;
`;

export const ComBody = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  margin-top: 20px;
`;

export const ComBodyTitle = styled.div`
  position: relative;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 40px;
  & > svg:nth-of-type(1) {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 7px;
    top: 5px;
  }
`;

export const CommentSpan = styled.span`
  padding-right: 10px;
  font-size: 1.6rem;
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
    color: #bdbdbd;
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
