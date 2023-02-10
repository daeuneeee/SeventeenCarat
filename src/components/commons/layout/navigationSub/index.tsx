import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import myPage from "../../../../../pages/myPage";

export default function LayoutNavigationSubPage() {
  const router = useRouter();

  const [clickedCategory, setClickedCategory] = useState("/boughtPage");

  const NavigationSubList = [
    { id: "/boughtPage", name: "구매한 상품" },
    { id: "/uploadPage", name: "업로드한 상품" },
    { id: "/pickedPage", name: "찜한 상품" },
  ];

  useEffect(() => {
    router.push(`/myPage/boughtPage`);
  }, []);

  const onClickLink = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/myPage${event.currentTarget.id}`);
    setClickedCategory(event.currentTarget.id);
  };

  return (
    <>
      <Wrapper>
        <ListBox>
          {NavigationSubList.map((list, index) => (
            <List
              key={index}
              id={list.id}
              onClick={onClickLink}
              className={clickedCategory === list.id ? "on" : ""}
            >
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
export const List = styled.button`
  padding: 10px 10px;
  margin: 0;
  border: none;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  &.on {
    background-color: #f8cacc;
    border-radius: 20px;
    color: white;
  }
  :hover {
    background-color: #f8cacc;
    border-radius: 20px;
    color: white;
  }
`;
