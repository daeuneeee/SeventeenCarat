import { useMutation } from "@apollo/client";
import { Modal } from "antd";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isActiveLoginState,
  isActiveSignUpState,
} from "../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // const [passwordError, setPasswordError] = useState("");
  // const [emailError, setEmailError] = useState("");

  const [isActiveLogin, setIsActiveLogin] = useRecoilState(isActiveLoginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isAcitveSignUp, setISActiveSignUp] =
    useRecoilState(isActiveSignUpState);

  const onClickWrapper = () => {
    setIsActiveLogin((isActiveLogin) => !isActiveLogin);
  };

  const onClickLogin = async (data) => {
    // if (email === "") {
    //   setEmailError("아이디를 입력해주세요");
    // }

    // if (password === "") {
    //   setPasswordError("비밀번호를 입력해주세요");
    // }

    // if (email && password) {
    try {
      const result = await loginUser({
        variables: data,
      });
      setIsActiveLogin(false);
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인 실패" });
        return;
      }

      setAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      setIsActiveLogin(false);
      if (error instanceof Error) Modal.error({ content: error.message });
      // }
    }
  };

  const onClickSignUp = () => {
    setIsActiveLogin(false);
    setISActiveSignUp(true);
  };
  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  //   if (event.target.value !== "") {
  //     setPasswordError("");
  //   }
  // };

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value);
  //   if (event.target.value !== "") {
  //     setEmailError("");
  //   }
  // };

  return (
    <>
      <LoginUI
        onClickWrapper={onClickWrapper}
        isActiveLogin={isActiveLogin}
        onClickLogin={onClickLogin}
        // onChangePassword={onChangePassword}
        // onChangeEmail={onChangeEmail}
        // passwordError={passwordError}
        // emailError={emailError}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
}
