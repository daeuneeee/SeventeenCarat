import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isActiveLoginBoxState } from "../../../commons/store";
import LayoutBannerPage from "./banner";
import LayoutFooterPage from "./footer";
import LayoutHeaderPage from "./header";
import LayoutNavigationPage from "./navigation";
import LayoutNavigationSubPage from "./navigationSub";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const setIsActive = useSetRecoilState(isActiveLoginBoxState);

  const router = useRouter();

  const HIDDEN_BANNERS = [
    "/boards/new",
    `/boards/${String(router.query.boardId)}`,
    `/boards/${String(router.query.boardId)}/edit`,
    "/products/new",
    `/products/${String(router.query.productId)}`,
    `/products/${String(router.query.productId)}/edit`,
    "/boards",
    "/products",
  ];

  const SHOW_NAVIGATIONSUBS = [
    "/myPage",
    "/myPage/uploadPage",
    "/myPage/boughtPage",
    "/myPage/pickedPage",
  ];

  const SHOW_NAVIGATIONS = ["/"];

  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isShowNavigation = SHOW_NAVIGATIONS.includes(router.asPath);
  const isShowNavigationSub = SHOW_NAVIGATIONSUBS.includes(router.asPath);

  const onClickCancel = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target.className.baseVal !== "carat") setIsActive(false);
    console.log(event.currentTarget.className);
  };

  return (
    <>
      <div onClick={onClickCancel}>
        <LayoutHeaderPage />
        {!isHiddenBanner && <LayoutBannerPage />}
        {isShowNavigation && <LayoutNavigationPage />}
        {isShowNavigationSub && <LayoutNavigationSubPage />}
        <div>{props.children}</div>
        <LayoutFooterPage />
      </div>
    </>
  );
}
