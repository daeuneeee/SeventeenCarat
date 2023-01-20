import { atom } from "recoil";

export const isActiveLoginState = atom({
  key: "isActiveLoginState",
  default: false,
});

export const isActiveSignUpState = atom({
  key: "isActiveSignUpState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const imgState = atom({
  key: "imgState",
  default: "",
});

export const isActiveLoginBoxState = atom({
  key: "isActiveLoginBoxState",
  default: false,
});

export const mapLatLngState = atom({
  key: "mapLatLngState",
  default: "",
});

export const visitedProductState = atom({
  key: "visitedProductState",
  default: [],
});

export const isPointChargingState = atom({
  key: "ispointChargingState",
  default: false,
});

export const isNestedCommentState = atom({
  key: "isNestedCommentState",
  default: false,
});

export const isWriteStage = atom({
  key: "isWriteStage",
  default: false,
});

export const isUpdateState = atom({
  key: "isUpdateState",
  default: 0,
});
