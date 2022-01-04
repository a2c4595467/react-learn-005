import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
// useContextを用いたステート管理
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";

// Recoil を用いたステート管理(値の更新)
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/UserState";

export const Top = () => {
  const history = useHistory();
  // useContextでのステート管理
  //const { setUserInfo } = useContext(UserContext);

  // Recoilでのステート管理
  // useSetRecoilStateで更新関数を受け取っているコンポーネントは
  // 再描画されない
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
