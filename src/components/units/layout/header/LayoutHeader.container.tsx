import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  isActiveLoginBoxState,
  isActiveLoginState,
  isActiveSignUpState,
  isPointChargingState,
  isUpdateState,
  visitedProductState,
} from "../../../../commons/store";
import { IQuery } from "../../../../commons/types/generated/types";
import BoardSvg from "../../../commons/svg/board";
import MarketSvg from "../../../commons/svg/market";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT } from "./LayoutHeader.queries";

const HeaderLink = [
  { id: "/boards", name: <BoardSvg /> },
  { id: "/products", name: <MarketSvg /> },
];

export default function LayoutHeader() {
  const [isActive, setIsActive] = useRecoilState(isActiveLoginBoxState);
  const [isActiveLogin, setIsActiveLogin] = useRecoilState(isActiveLoginState);
  const [isActiveSignUp, setIsActiveSignUp] =
    useRecoilState(isActiveSignUpState);
  const [visitedProduct, setVisitedProduct] =
    useRecoilState(visitedProductState);
  const [isPointCharging, setIsPointCharging] =
    useRecoilState(isPointChargingState);
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("products"));
    if (result) setVisitedProduct(result);
  }, [isUpdate]);

  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logout] = useMutation(LOGOUT);

  const onClickTitle = async () => {
    await router.push(`/`);
  };

  const onClickToList = async (event: MouseEvent<HTMLButtonElement>) => {
    await router.push(event.currentTarget.id);
  };

  const onClickPoint = () => {
    setIsPointCharging((prev) => !prev);
  };

  const onClickCarat = () => {
    setIsActive((prev) => !prev);
  };

  const onClickLogin = () => {
    setIsActiveLogin((prev) => !prev);
  };

  const onClickSignUp = () => {
    setIsActiveSignUp((prev) => !prev);
  };

  const onClickMyPage = () => {
    void router.push("/myPage");
  };

  const onClickLogOut = async () => {
    // localStorage.removeItem("accessToken");
    await logout();
    router.reload();
  };

  return (
    <>
      <LayoutHeaderUI
        HeaderLink={HeaderLink}
        isActive={isActive}
        onClickTitle={onClickTitle}
        onClickToList={onClickToList}
        onClickCarat={onClickCarat}
        onClickLogin={onClickLogin}
        isActiveLogin={isActiveLogin}
        onClickSignUp={onClickSignUp}
        isActiveSignUp={isActiveSignUp}
        data={data}
        onClickMyPage={onClickMyPage}
        onClickLogOut={onClickLogOut}
        onClickPoint={onClickPoint}
        isPointCharging={isPointCharging}
      />
    </>
  );
}
