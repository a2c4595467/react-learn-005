import { atom } from "recoil";

export const userState = atom({
  // 他のリコイルステートとかぶらない名前
  key: "userState",
  default: {
    isAdmin: false
  }
});
