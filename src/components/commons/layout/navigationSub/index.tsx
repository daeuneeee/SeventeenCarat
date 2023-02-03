import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import myPage from "../../../../../pages/myPage";

export default function LayoutNavigationSubPage() {
  const router = useRouter();

  const NavigationSubList = [
    { id: "/uploadPage", name: "업로드한 상품" },
    { id: "/boughtPage", name: "구매한 상품" },
    { id: "/pickedPage", name: "찜한 상품" },
  ];

  const onClickLink = (event: MouseEvent<HTMLHeadingElement>) => {
    void router.push(`/myPage${event.currentTarget.id}`);
  };

  return (
    <>
      <Wrapper>
        <ListBox>
          {NavigationSubList.map((list, index) => (
            <List key={index} id={list.id} onClick={onClickLink}>
              {list.name}
            </List>
          ))}
        </ListBox>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 1200px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #f8cacc, #8da4d0) 1;
`;
export const List = styled.h1`
  padding: 10px 10px;
  margin: 0;
  cursor: pointer;
  :hover {
    background-color: #f8cacc;
    border-radius: 20px;
    color: white;
  }
`;
