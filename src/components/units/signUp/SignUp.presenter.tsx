import LoginSignUpButton from "../../commons/buttons/LoginSignUp";
import LoginSignUpInput from "../../commons/inputs/LoginSignUp";
import * as S from "../signUp/SignUp.styles";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI({
  isActiveSignUp,
  onClickWrapper,
  onClickSignUp,
  register,
  handleSubmit,
  errors,
  onClickLogin,
}: ISignUpUIProps) {
  return (
    <form onSubmit={handleSubmit(onClickSignUp)}>
      {isActiveSignUp && <S.Wrapper onClick={onClickWrapper}></S.Wrapper>}
      <S.SignUpModal>
        <S.SignUpDiv>
          <S.Title>회원가입</S.Title>
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
            <S.Label>
              <LoginSignUpInput
                placeholder="비밀번호 확인"
                type="password"
                register={register("passwordCheck")}
              />
              <S.Error>{errors.passwordCheck?.message}</S.Error>
            </S.Label>
            <S.Label>
              <LoginSignUpInput
                placeholder="이름"
                type="text"
                register={register("name")}
              />
              <S.Error>{errors.name?.message}</S.Error>
            </S.Label>
          </S.InputDiv>
          <LoginSignUpButton title="회원가입"></LoginSignUpButton>
          <S.SignUpOpt>
            <div>이미 계정이 있으신가요?</div>
            <S.Login onClick={onClickLogin}>로그인하기</S.Login>
          </S.SignUpOpt>
        </S.SignUpDiv>
      </S.SignUpModal>
    </form>
  );
}
