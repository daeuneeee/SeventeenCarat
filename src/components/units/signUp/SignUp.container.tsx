import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
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
import { IData } from "./SignUp.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 작성해주세요.")
    .required("아이디를 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
      "비밀번호는 영문 대/소문자, 숫자를 포함한 8글자 이상 20글자 이하로 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  name: yup.string().required("이름을 입력해주세요."),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({ resolver: yupResolver(schema) });

  const setIsActiveLogin = useSetRecoilState(isActiveLoginState);
  const [isActiveSignUp, setIsActiveSignUp] =
    useRecoilState(isActiveSignUpState);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickWrapper = () => {
    setIsActiveSignUp((isActiveSignUp) => !isActiveSignUp);
  };

  const onClickSignUp = async (data: IData) => {
    const { passwordCheck, ...rest } = data;
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
