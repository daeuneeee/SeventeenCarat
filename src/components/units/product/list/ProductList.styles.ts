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

export const BestBoxName = styled.div`
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

export const BestBoxRemarks = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  overflow: hidden;
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4f4f4f;
`;

export const BestBoxPrice = styled.div`
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
  width: 15%;
  gap: 4px;
`;

export const BestBoxLikeImg = styled.div`
  width: 100%;
  height: 18px;
  margin-bottom: 6px;
  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const BestBoxPickedCount = styled.div`
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
  justify-content: space-between;
  /* align-items: fle; */
  margin-bottom: 40px;
  &::after {
    position: absolute;
    background-image: url("/search.png");
    display: block;
    content: "";
    width: 18px;
    height: 18px;
    background-size: cover;
    right: 420px;
    top: 15px;
  }
`;

export const BodySell = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
  font-size: 1.8rem;
  margin-top: 20px;
`;

export const BodyTitle = styled.input`
  border: none;
  padding-left: 50px;
  width: 27%;
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

// export const BodyDateBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #8da4d0;
//   text-align: center;
//   width: 20%;
//   border-radius: 5px;
// `;

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
  width: 8%;
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
  /* border-top: 1px solid #8da4d0; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 16px;
`;

export const BodyList = styled.div`
  border: 1px solid red;
  width: 288px;
  height: 288px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  /* border-top: 1px solid #8da4d0; */
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
