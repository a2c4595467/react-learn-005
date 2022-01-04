/**
 * コンテキストでステート管理
 */
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // state
  // setUserInfo にてユーザー情報を更新すると、全て再レンダリングされてしまう。
  // 情報が新しくなるので再描画するのは正しい動きでもある。
  // しかし、再描画不要なところ（今回では検索テキストボックス）もあるので、
  // コンポーネント側でmemo()で囲む。
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
