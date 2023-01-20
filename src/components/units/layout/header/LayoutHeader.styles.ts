import styled from "@emotion/styled";

export const Header = styled.div`
  width: 1200px;
  /* border: 1px solid pink; */
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-left: 20px;
  cursor: pointer;
  margin-bottom: 0;
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 20px;
  align-items: center;
`;

export const Point = styled.span`
  font-size: 1.4rem;
  background-color: #f8cacc;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;

export const Welcome = styled.span`
  font-size: 1.6rem;
`;

export const Category = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const LoginOptBtn = styled.div`
  margin-left: 3px;
  padding-top: 1px;
  position: relative;
  cursor: pointer;
  /* ::after {
    position: absolute;
    top: 30px;
    right: 0;
    display: block;
    width: 50px;
    height: 40px;
    content: "";
    background-color: gray;
    z-index: 222;
  } */
`;

export const LoginOptBox = styled.div`
  position: absolute;
  top: 39px;
  right: 10px;
  width: 82px;
  height: 60px;
  background-color: #f8cacc;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
  color: white;
  font-size: 1.6rem;
  cursor: auto;
  ::after {
    position: absolute;
    top: -10px;
    right: 0;
    content: "";
    display: block;
    z-index: 1;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid #f8cacc;
    border-bottom: 5px solid #f8cacc;
  }
`;

export const TextStyle = styled.span`
  cursor: pointer;
`;

export const TitleImg = styled.img`
  width: 120px;
  height: 60px;
`;
