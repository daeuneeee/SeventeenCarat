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

export const ProductWrapper = styled.div`
  padding: 80px 102px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductAndDateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px; ;
`;

export const ProductName = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
`;

export const SellerAndDateBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
`;

export const Seller = styled.span`
  font-size: 1.6rem;
`;

export const CreatedAt = styled.span`
  font-size: 1.4rem;
  color: #828282;
`;

export const PickAndLinkBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;

export const LinkBox = styled.div`
  width: 100%;
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 50px;
  height: 30px;
  padding-top: 2px;
  cursor: pointer;
  /* & svg {
    width: 80%;
    height: 100%;
  } */
`;

export const PickCount = styled.div`
  font-size: 1.8rem;
`;

export const UnderLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #f8cacc;
  margin-bottom: 20px;
`;

export const Body = styled.div``;

export const Remarks = styled.div`
  font-size: 1.8rem;
  margin-bottom: 4px;
  color: #bdbdbd;
`;

// export const Name = styled.div`
//   font-size: 2.4rem;
//   margin-bottom: 8px;
// `;

export const Price = styled.div`
  font-size: 3.6rem;
  margin-bottom: 80px;
`;

export const ImgBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MainImg = styled.div`
  width: 570px;
  height: 570px;
`;

export const ListImgBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ListImg = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const Contents = styled.div`
  font-size: 1.8rem;
  margin-bottom: 40px;
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 40px;
`;

export const Tags = styled.span`
  color: white;
  font-size: 1.6rem;
  background: linear-gradient(45deg, #f8cacc, #8da4d0);
  padding: 3px 10px;
  border-radius: 10px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  gap: 20px;
`;

export const AddressBox = styled.div`
  margin-left: 100px;
`;

export const Address = styled.span`
  font-size: 1.8rem;
  margin-right: 10px;
`;

export const AddressDetail = styled.span`
  font-size: 1.8rem;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin-bottom: 84px;
  margin: 0 auto;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
  padding-bottom: 80px;
  border-bottom: 1px solid #8da4d0;
`;

export const List = styled.div`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const Buy = styled.div`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const Update = styled.div`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

export const Delete = styled.div`
  width: 179px;
  height: 45px;
  background-color: #f8cacc;
  color: white;
  border: 1px solid #f8cacc;
  font-size: 1.6rem;
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #8da4d0;
    border: none;
  }
`;

// export const  = styled.div`

// `
