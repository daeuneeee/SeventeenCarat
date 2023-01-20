import styled from "@emotion/styled";
import Link from "next/link";
import Dompurify from "dompurify";
import { useEffect } from "react";
import { isUpdateState, visitedProductState } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function InfiniteProduct({ el, index }) {
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);

  const onClickProduct = (product) => () => {
    // 1. 기존 장바구니 가져오기
    const products = JSON.parse(localStorage.getItem("products") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = products.filter((el) => el._id === product._id);
    if (temp.length === 1) return;

    // 3. 해당 장바구니에 담기
    products.unshift(product);
    if (products.length > 5) {
      products.pop();
    }
    localStorage.setItem("products", JSON.stringify(products));
    setIsUpdate((prev) => prev + 1);
  };
  return (
    <>
      <Container onClick={onClickProduct(el)}>
        {el.images?.[0] ? (
          <Link href={`products/${el._id}`}>
            <BodyList
              style={{
                backgroundImage:
                  `url(https://storage.googleapis.com/${el.images[0]})`.replaceAll(
                    " ",
                    "%20"
                  ),
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              className="BodyList"
            >
              <TextBox className="TextBox">
                <Text>{el.name}</Text>
                <Text>{el.remarks}</Text>
                {/* {typeof window !== "undefined" && (
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(el.contents),
                    }}
                  ></Text>
                )} */}
                <Text>
                  ₩
                  {`${String(el.price).replace(
                    /(\d)(?=(?:\d{3})+(?!\d))/g,
                    "$1,"
                  )}${" "}`}
                </Text>
              </TextBox>
            </BodyList>
          </Link>
        ) : (
          <Link href={`products/${el._id}`}>
            <NoBodyList className="NoBodyList">
              <TextBox className="TextBox">
                <Text>{el.name}</Text>
                <Text>{el.remarks}</Text>
                {/* {typeof window !== "undefined" && (
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(el.contents),
                    }}
                  ></Text>
                )} */}
                <Text>
                  ₩
                  {`${String(el.price).replace(
                    /(\d)(?=(?:\d{3})+(?!\d))/g,
                    "$1,"
                  )}${" "}`}
                </Text>
              </TextBox>
            </NoBodyList>
          </Link>
        )}
      </Container>
    </>
  );
}

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > div {
    /* background-color: rgba(255, 255, 255, 0.5); */
    /* opacity: 0.5; */
    z-index: 0;
  }
  &:hover {
    .NoBodyList {
      opacity: 0.5;
      z-index: 0;
    }
  }
  &:hover {
    .TextBox {
      opacity: 1;
      z-index: 1;
    }
  }
`;

export const BodyList = styled.div`
  width: 288px;
  height: 288px;
  background-size: cover;
  border-radius: 20px;
  /* background-color: #f2f2f2; */
  color: #8da4d0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 1;
  transition: 0.5 ease;
  backface-visibility: hidden;
`;

export const TextBox = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Text = styled.div`
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  opacity: 1;
`;

export const NoBodyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 288px;
  height: 288px;
  background-color: black;
  border-radius: 20px;
`;
