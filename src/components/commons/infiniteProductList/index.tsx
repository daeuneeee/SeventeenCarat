import styled from "@emotion/styled";
import Link from "next/link";
import { isUpdateState } from "../../../commons/store";
import { useSetRecoilState } from "recoil";
import { IUseditem } from "../../../commons/types/generated/types";

export default function InfiniteProduct({ el }: { el: IUseditem }) {
  const setIsUpdate = useSetRecoilState(isUpdateState);

  const onClickProduct = (product: IUseditem) => () => {
    // 1. 기존 장바구니 가져오기
    const products = JSON.parse(localStorage.getItem("products") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = products.filter((el: IUseditem) => el._id === product._id);
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
            >
              <DivBox className="DivBox">
                <TextBox className="TextBox">
                  <Text>{el.name}</Text>
                  <Text>{el.remarks}</Text>
                  <Text>
                    ₩
                    {`${String(el.price).replace(
                      /(\d)(?=(?:\d{3})+(?!\d))/g,
                      "$1,"
                    )}${" "}`}
                  </Text>
                </TextBox>
              </DivBox>
            </BodyList>
          </Link>
        ) : (
          <Link href={`products/${el._id}`}>
            <BodyList>
              <TextBox className="TextBox">
                <Text>{el.name}</Text>
                <Text>{el.remarks}</Text>
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
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    .DivBox {
      background-color: rgba(0, 0, 0, 0.6);
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

const BodyList = styled.div`
  width: 288px;
  height: 288px;
  background-size: cover;
  color: #8da4d0;
  font-size: 20px;
  position: relative;
  opacity: 1;
`;

const DivBox = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5 ease;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const TextBox = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.div`
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  opacity: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
