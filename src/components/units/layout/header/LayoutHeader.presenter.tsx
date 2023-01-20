import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import PointChargingPage from "../../../commons/pointCharging";
import CaratSvg from "../../../commons/svg/carat";
import Login from "../../login/Login.container";
import SignUp from "../../signUp/SignUp.container";
import * as S from "../header/LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";
export default function LayoutHeaderUI({
  HeaderLink,
  isActive,
  onClickTitle,
  onClickToList,
  onClickCarat,
  onClickLogin,
  isActiveLogin,
  onClickSignUp,
  isActiveSignUp,
  data,
  onClickMyPage,
  onClickLogOut,
  onClickPoint,
  isPointCharging,
}: ILayoutHeaderUIProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  return (
    <>
      {accessToken ? (
        <>
          <S.Header>
            <S.Title onClick={onClickTitle}>
              <S.TitleImg src="/seventeenLogo.png" />
            </S.Title>
            <S.CategoryDiv>
              <S.Welcome>♡럿랑해 {data?.fetchUserLoggedIn.name}님♡</S.Welcome>
              <S.Point onClick={onClickPoint}>
                &nbsp;{" "}
                {String(data?.fetchUserLoggedIn.userPoint?.amount).replace(
                  /(\d)(?=(?:\d{3})+(?!\d))/g,
                  "$1,"
                )}{" "}
                P &nbsp;
              </S.Point>
              {HeaderLink.map((el) => (
                <S.Category key={el.id} id={el.id} onClick={onClickToList}>
                  {el.name}
                </S.Category>
              ))}
              <S.LoginOptBtn onClick={onClickCarat}>
                <CaratSvg />
                {isActive && (
                  <S.LoginOptBox>
                    <S.TextStyle onClick={onClickMyPage}>
                      마이페이지
                    </S.TextStyle>
                    <S.TextStyle onClick={onClickLogOut}>로그아웃</S.TextStyle>
                  </S.LoginOptBox>
                )}
              </S.LoginOptBtn>
            </S.CategoryDiv>
          </S.Header>
          {isActiveLogin && <Login />}
          {isPointCharging && <PointChargingPage />}
          {isActiveSignUp && <SignUp />}
        </>
      ) : (
        <>
          <S.Header>
            <S.Title onClick={onClickTitle}>
              <S.TitleImg src="/seventeenLogo.png" />
            </S.Title>
            <S.CategoryDiv>
              <S.Welcome>♡럿랑해♡</S.Welcome>
              {HeaderLink.map((el) => (
                <S.Category key={el.id} id={el.id} onClick={onClickToList}>
                  {el.name}
                </S.Category>
              ))}
              <S.LoginOptBtn onClick={onClickCarat}>
                <CaratSvg />
                {isActive && (
                  <S.LoginOptBox>
                    <S.TextStyle onClick={onClickLogin}>로그인</S.TextStyle>
                    <S.TextStyle onClick={onClickSignUp}>회원가입</S.TextStyle>
                  </S.LoginOptBox>
                )}
              </S.LoginOptBtn>
            </S.CategoryDiv>
          </S.Header>
          {isActiveLogin && <Login />}
          {isActiveSignUp && <SignUp />}
          {isPointCharging && <PointChargingPage />}
        </>
      )}
    </>
  );
}
