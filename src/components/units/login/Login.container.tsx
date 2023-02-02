import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
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
import { IData } from "./Login.types";

const schema = yup.object({
  email: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({ resolver: yupResolver(schema) });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [isActiveLogin, setIsActiveLogin] = useRecoilState(isActiveLoginState);
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setIsActiveSignUp = useSetRecoilState(isActiveSignUpState);

  const onClickWrapper = () => {
    setIsActiveLogin((isActiveLogin) => !isActiveLogin);
  };

  const onClickLogin = async (data: IData) => {
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
    } catch (error) {
      setIsActiveLogin(false);
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSignUp = () => {
    setIsActiveLogin(false);
    setIsActiveSignUp(true);
  };

  return (
    <>
      <LoginUI
        onClickWrapper={onClickWrapper}
        isActiveLogin={isActiveLogin}
        onClickLogin={onClickLogin}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
}
