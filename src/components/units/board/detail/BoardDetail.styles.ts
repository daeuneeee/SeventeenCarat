import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  margin: 0 auto;
`;

export const BoardWrapper = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 80px 102px;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #f8cacc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding-left: 5px;
  padding-top: 20px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 376px;
  height: 72px;
  background-color: #8da4d0;
  color: white;
  position: absolute;
  top: -75px;
  right: 25px;
  text-align: right;
  padding: 5px 20px;
  font-size: 1.6rem;
  font-weight: 500;
  &::after {
    position: absolute;
    bottom: -9px;
    right: 0px;
    display: block;
    content: "";
    width: 0px;
    height: 0px;
    border-top: 10px solid #8da4d0;
    border-left: 10px solid transparent;
    border-right: 10px solid #8da4d0;
    border-bottom: 10px solid transparent;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.div`
  margin-right: 20px;
  width: 55px;
`;

export const WriterFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
`;

export const InformBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
`;

export const Writer = styled.span`
  font-size: 1.6rem;
`;

export const Date = styled.div`
  font-size: 1.4rem;
  color: #828282;
`;

export const ImageFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
  position: relative;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const ImgShare = styled.div`
  width: 35px;
  height: 18px;
`;

export const ImgLocation = styled.div`
  width: 40px;
  height: 40px;
`;

export const Body = styled.div`
  align-items: center;
  width: 100%;
  padding: 8rem 0px;
`;

export const ImgDiv = styled.div`
  /* width: 300px; */
`;

export const ImgBox = styled.img`
  display: block;
  /* width: 100%; */
  max-width: 100%;
  margin: 40px 0px;
`;

export const Contents = styled.div`
  font-size: 1.6rem;
  margin-bottom: 120px;
  word-break: break-all;
`;

export const Link = styled.iframe`
  display: block;
  width: 486px;
  height: 240px;
  margin: 0 auto;
  border: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-direction: row;
  margin-top: 160px;
`;

export const ThumbsBtn = styled.button`
  border: none;
  background: none;
  width: 40px;
  cursor: pointer;
`;

export const ThumbsImg = styled.div`
  width: 100%;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ThumbsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  &:nth-of-type(1) svg:hover path {
    fill: #8da4d0;
  }
  &:nth-of-type(2) svg:hover path {
    fill: black;
  }
`;

export const ThumbsYellow = styled.div`
  color: #f8cacc;
  font-size: 1.8rem;
`;

export const ThumbsGray = styled.div`
  color: #828282;
  font-size: 1.8rem;
`;

export const ComHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 87px;
  padding-bottom: 87px;
  border-bottom: 1px solid #8da4d0;
`;

export const List = styled.button`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const Modify = styled.button`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const Delete = styled.button`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;
