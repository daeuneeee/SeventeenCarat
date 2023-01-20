import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { imgState } from "../src/commons/store";

const boxRotate = keyframes`
  0% {
    transform: rotate(0deg);
  opacity: 1;
  }
  100% {
    transform: rotate(360deg) ;
  opacity: 0
  }
  
  `;

const ImgDiv = styled.div`
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  img {
    animation: ${boxRotate} 1.8s linear 1;
  }
`;

const SvtImg = styled.img`
  display: block;
  margin: 0 auto;
`;

export default function Home() {
  const [imgData, setImgData] = useRecoilState(imgState);

  const [isActiveLanding, setIsActiveLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActiveLanding(false);
    }, 1500);
  }, []);

  return (
    <>
      <ImgDiv></ImgDiv>
      {isActiveLanding && (
        <Wrapper>
          <LogoDiv>
            <img src="/mainLogo.png" />
          </LogoDiv>
        </Wrapper>
      )}
      <SvtImg src={imgData} id="1" />
    </>
  );
}
