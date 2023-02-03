import styled from "@emotion/styled";
import axios from "axios";
import { MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { imgState } from "../../../../commons/store";

const API_KEY = "63303c4f06ee7aca62351f20";

const Navigation = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;
  gap: 20px;
`;

const Profiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70%;
`;

const BtnContainer = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  border-radius: 100%;
  cursor: pointer;
`;

const NavigationAPI = [
  { id: "/1_scoups.png" },
  { id: "/2_jeonghan.png" },
  { id: "/3_joshua.png" },
  { id: "/4_jun.png" },
  { id: "/5_hoshi.png" },
  { id: "/6_wonwoo.png" },
  { id: "/7_woozi.png" },
  { id: "/8_the8.png" },
  { id: "/9_mingyu.png" },
  { id: "/10_dk.png" },
  { id: "/11_seungkwan.png" },
  { id: "/12_vernon.png" },
  { id: "/13_dino.png" },
];

export default function LayoutNavigationPage() {
  const setImgData = useSetRecoilState(imgState);

  async function getImage(event: MouseEvent<HTMLImageElement>) {
    const url = `https://backend.brian-hong.tech/image?api_key=${API_KEY}&name=${event.currentTarget.id}`;
    const result = await axios.get(url);
    setImgData(result.data.img);
  }

  return (
    <>
      <Navigation>
        <Wrapper>
          <Profiles>
            {NavigationAPI.map((el, index) => (
              <BtnContainer
                key={el.id}
                src={el.id}
                onClick={getImage}
                id={String(index + 1)}
              />
            ))}
          </Profiles>
        </Wrapper>
      </Navigation>
    </>
  );
}
