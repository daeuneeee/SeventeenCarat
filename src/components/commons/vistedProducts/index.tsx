import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { visitedProductState } from "../../../commons/store";
import { v4 as uuidV4 } from "uuid";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IUseditem } from "../../../commons/types/generated/types";

export default function VisitedProducts() {
  const router = useRouter();
  const visitedProduct = useRecoilValue(visitedProductState);
  const onClickToList = async (event: MouseEvent<HTMLDivElement>) => {
    await router.push(`/products/${event.currentTarget.id}`);
  };

  console.log(visitedProduct);

  return (
    <>
      {visitedProduct.length !== 0 ? (
        <ProductBox>
          <Span>최근 본 상품</Span>
          <ProductMiddleBox>
            {visitedProduct?.map((el: IUseditem) => (
              <Product
                id={el._id}
                onClick={onClickToList}
                key={uuidV4()}
                style={{
                  backgroundImage:
                    `url(https://storage.googleapis.com/${el.images?.[0]})`.replaceAll(
                      " ",
                      "%20"
                    ),
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></Product>
            ))}
          </ProductMiddleBox>
        </ProductBox>
      ) : (
        <></>
      )}
    </>
  );
}

export const ProductBox = styled.div`
  width: 10%;
  position: fixed;
  top: 15%;
  right: 3%;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #eee;
  border-radius: 20px;
`;

export const Span = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

export const ProductMiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  /* height: 90%; */
  border-radius: 20px;
  background-color: white;
  padding: 20px 0;
  /* border: 2px solid transparent;
  border-image: linear-gradient(to left, #f8cacc, #8da4d0) 1; */
`;

export const Product = styled.div`
  width: 80%;
  /* height: 80%; */
  padding-bottom: 85%;
  border-radius: 20px;
  cursor: pointer;
`;
