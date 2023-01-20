import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  isActiveLoginState,
  isActiveSignUpState,
} from "../../../commons/store";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호를 확인해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [isActiveLogin, setIsActiveLogin] = useRecoilState(isActiveLoginState);
  const [isActiveSignUp, setIsActiveSignUp] =
    useRecoilState(isActiveSignUpState);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickWrapper = () => {
    setIsActiveSignUp((isActiveSignUp) => !isActiveSignUp);
  };

  const onClickSignUp = async (data) => {
    const { passwordCheck, ...rest } = data;
    console.log(rest);
    try {
      await createUser({
        variables: {
          createUserInput: rest,
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      setIsActiveSignUp(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      setIsActiveSignUp(false);
    }
  };

  const onClickLogin = () => {
    setIsActiveSignUp(false);
    setIsActiveLogin(true);
  };

  return (
    <>
      <SignUpUI
        isActiveSignUp={isActiveSignUp}
        onClickWrapper={onClickWrapper}
        onClickSignUp={onClickSignUp}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
