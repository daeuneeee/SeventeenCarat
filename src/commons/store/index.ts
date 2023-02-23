import { atom } from "recoil";
import { v4 } from "uuid";

export const isActiveLoginState = atom({
  key: "isActiveLoginState" + v4(),
  default: false,
});

export const isActiveSignUpState = atom({
  key: "isActiveSignUpState" + v4(),
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState" + v4(),
  default: "",
});

export const imgState = atom({
  key: "imgState" + v4(),
  default: "",
});

export const isActiveLoginBoxState = atom({
  key: "isActiveLoginBoxState" + v4(),
  default: false,
});

export const mapLatLngState = atom({
  key: "mapLatLngState" + v4(),
  default: "",
});

export const visitedProductState = atom({
  key: "visitedProductState" + v4(),
  default: [],
});

export const isPointChargingState = atom({
  key: "isPointChargingState" + v4(),
  default: false,
});

export const isNestedCommentState = atom({
  key: "isNestedCommentState" + v4(),
  default: false,
});

export const isWriteStage = atom({
  key: "isWriteStage" + v4(),
  default: false,
});

export const isUpdateState = atom({
  key: "isUpdateState" + v4(),
  default: 0,
});
