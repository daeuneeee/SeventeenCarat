import LoginSignUpButton from "../../commons/buttons/LoginSignUp";
import LoginSignUpInput from "../../commons/inputs/LoginSignUp";
import * as S from "../login/Login.styles";

export default function LoginUI({
  onClickWrapper,
  isActiveLogin,
  onClickLogin,
  // onChangeEmail,
  // onChangePassword,
  // emailError,
  // passwordError,
  register,
  errors,
  handleSubmit,
  onClickSignUp,
}) {
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      {isActiveLogin && <S.Wrapper onClick={onClickWrapper}></S.Wrapper>}
      <S.LoginModal>
        <S.LoginDiv>
          <S.Title>로그인</S.Title>
          <S.UnderLine></S.UnderLine>
          <S.InputDiv>
            <S.Label>
              {/* <S.InputStyle
                onChange={onChangeEmail}
                placeholder="아이디"
                type="text"
              /> */}
              <LoginSignUpInput
                placeholder="아이디"
                type="text"
                register={register("email")}
              />

              {/* <S.Error>{emailError}</S.Error> */}
              <S.Error>{errors.email?.message}</S.Error>
            </S.Label>
            <S.Label>
              {/* <S.InputStyle
                onChange={onChangePassword}
                placeholder="비밀번호"
                type="password"
              /> */}
              <LoginSignUpInput
                placeholder="비밀번호"
                type="password"
                register={register("password")}
              />
              <S.Error>{errors.password?.message}</S.Error>
              {/* <S.Error>{passwordError}</S.Error> */}
            </S.Label>
          </S.InputDiv>
          <S.CheckBoxDiv>
            <S.AutoLogin className="login" type="checkbox" id="checked" />
            <label htmlFor="checked">
              <em></em>자동로그인
            </label>
          </S.CheckBoxDiv>
          {/* <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn> */}
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
