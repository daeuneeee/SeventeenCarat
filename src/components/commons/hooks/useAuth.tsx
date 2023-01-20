import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isActiveLoginState,
  isPointChargingState,
} from "../../../commons/store";

export function useAuth() {
  const [isActiveLogin, setIsActiveLogin] = useRecoilState(isActiveLoginState);
  const [isPointCharging, setIsPointCharging] =
    useRecoilState(isPointChargingState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다");
      setIsActiveLogin(true);
      setIsPointCharging(false);
    }
  }, []);
}
