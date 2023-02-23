import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  background-color: white;
  color: black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
  margin-top: 50px;
  text-align: center;
`;

export const Best = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BestBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 360px;
  border-radius: 20px;
  justify-content: space-between;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
  cursor: pointer;
  &:hover {
    .bestBoxImg {
      background-size: cover;
      transform: scale(0.95);
      border-radius: 20px;
      transition: all 0.4s ease;
    }
    path {
      fill: #8da4d0;
      transition: all 0.4s ease;
    }
  }
`;

export const BestBoxImg = styled.div`
  /* background-position: 0 300px; */
  background-size: cover;
  /* width: 100%; */
  height: 100%;
  /* transform: scale(0.9); */
  border-radius: 20px 20px 0px 0px;
  background-color: #f2f2f2;
  color: #8da4d0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgSpan = styled.span``;

export const BestBoxContent = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 0px 0px 20px 20px;
  padding: 0px 20px;
`;

export const BestBoxTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BestBoxBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BestBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BestBoxUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestBoxUserImg = styled.img`
  width: 20px;
  margin-right: 6px;
`;

export const BestBoxUserName = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const BestBoxDate = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 8px;
  color: #828282;
`;

export const BestBoxLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestBoxLikeImg = styled.div`
  width: 20px;
  height: 18px;
  margin-bottom: 6px;
`;

export const BestBoxLikeCount = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 52px;
  gap: 40px;
  justify-content: flex-end;
  margin-bottom: 40px;
  &::after {
    position: absolute;
    background-image: url("/search.png");
    display: block;
    content: "";
    width: 18px;
    height: 18px;
    background-size: cover;
    right: 456px;
    top: 17px;
  }
`;

export const BodyTitle = styled.input`
  position: relative;
  border: none;
  padding-left: 50px;
  width: 30%;
  background-color: #f8cacc;
  border-radius: 10px;
  outline: none;
  font-size: 1.6rem;
  color: white;
  &::placeholder {
    font-size: 1.6rem;
    color: white;
  }
`;

export const BodyDate = styled.input`
  width: 100%;
  height: 30px;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  background-color: white;
  outline: none;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const BodySearch = styled.button`
  width: 7.83%;
  border-radius: 10px;
  background-color: #f8cacc;
  color: white;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const BodyListBox = styled.div`
  border-top: 3px solid #8da4d0;
`;

export const BodyList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  border-bottom: 1px solid #c6d1e7;
  text-align: center;
  padding: 12px 0px;
  margin: 0;
`;

export const BodyContentsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  border-bottom: 1px solid #c6d1e7;
  text-align: center;
  padding: 12px 0px;
  margin: 0;
  :hover {
    background-color: #c6d1e7;
    > li {
      color: white;
    }
  }
`;

export const ListNumberName = styled.li`
  width: 13%;
  font-size: 1.8rem;
`;
export const ListTitleName = styled.li`
  width: 57%;
  font-size: 1.8rem;
`;
export const ListWriterName = styled.li`
  width: 10%;
  font-size: 1.8rem;
`;
export const ListDateName = styled.li`
  width: 20%;
  font-size: 1.8rem;
`;

export const ListNumber = styled.li`
  width: 13%;
  font-size: 1.6rem;
  color: #4f4f4f;
`;

export const ListTitle = styled.li`
  width: 57%;
  font-size: 1.6rem;
  color: #4f4f4f;
  cursor: pointer;
`;

export const ListWriter = styled.li`
  width: 10%;
  font-size: 1.6rem;
  color: #4f4f4f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListDate = styled.li`
  width: 20%;
  font-size: 1.6rem;
  color: #4f4f4f;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  border-top: 3px solid #8da4d0;
  padding-top: 40px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyBox = styled.div`
  width: 171px;
  height: 52px;
`;

export const RegisterBtn = styled.button`
  position: relative;
  width: 171px;
  height: 52px;
  background-color: #f8cacc;
  /* background-image: url("/pen.png"); */
  /* background-repeat: no-repeat; */
  /* background-size: 19px; */
  /* background-position: 10px 20px; */
  color: white;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  padding-left: 30px;
  font-size: 1.6rem;
  cursor: pointer;
  svg {
    position: absolute;
    top: 13px;
    left: 20px;
  }
  &:hover {
    background-color: #8da4d0;
    color: white;
    path {
      fill: white;
    }
  }
`;
