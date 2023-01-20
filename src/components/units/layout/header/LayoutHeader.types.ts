import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  HeaderLink: Array<{ id: string; name: JSX.Element }>;
  isActive: any;
  onClickTitle: () => void;
  onClickToList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCarat: () => void;
  onClickLogin: () => void;
  isActiveLogin: boolean;
  onClickSignUp: () => void;
  isActiveSignUp: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickMyPage: () => void;
  onClickLogOut: () => void;
  onClickPoint: () => void;
}
