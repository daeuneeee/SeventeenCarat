import LoginSignUpButton from "../../commons/buttons/LoginSignUp";
import LoginSignUpInput from "../../commons/inputs/LoginSignUp";
import * as S from "../login/Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI({
  onClickWrapper,
  isActiveLogin,
  onClickLogin,
  register,
  errors,
  handleSubmit,
  onClickSignUp,
}: ILoginUIProps) {
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      {isActiveLogin && <S.Wrapper onClick={onClickWrapper}></S.Wrapper>}
      <S.LoginModal>
        <S.LoginDiv>
          <S.Title>로그인</S.Title>
          <S.UnderLine></S.UnderLine>
          <S.InputDiv>
            <S.Label>
              <LoginSignUpInput
                placeholder="아이디"
                type="text"
                register={register("email")}
              />
              <S.Error>{errors.email?.message}</S.Error>
            </S.Label>
            <S.Label>
              <LoginSignUpInput
                placeholder="비밀번호"
                type="password"
                register={register("password")}
              />
              <S.Error>{errors.password?.message}</S.Error>
            </S.Label>
          </S.InputDiv>
          <LoginSignUpButton title="로그인"></LoginSignUpButton>
          <S.LoginOpt>
            <S.SignFind onClick={onClickSignUp}>회원가입</S.SignFind>
            <S.FindDiv>
              <S.SignFind>아이디찾기</S.SignFind>
              <span>ㅣ</span>
              <S.SignFind>비밀번호찾기</S.SignFind>
            </S.FindDiv>
          </S.LoginOpt>
        </S.LoginDiv>
      </S.LoginModal>
    </form>
  );
}
