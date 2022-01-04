/**
 * ユーザーの画像と名前のモルキュールを作成する
 */
import { memo } from "react";
import styled from "styled-components";

// useContextを用いたステート管理
//import useContext from "react"
//import { UserContext } from "../../../providers/UserProvider";

// Recoilを用いたステート管理
// Recoilから値だけを参照する
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/UserState";

//export const UserIconWithName = (props) => {
export const UserIconWithName = memo((props) => {
  // 必要な情報を受取る
  const { name, image } = props;

  // useContextを用いた方法
  //const { userInfo } = useContext(UserContext);

  // Recoil を用いた方法
  // 値を参照する場合はuseRecoilValue()を用いる
  const userInfo = useRecoilValue(userState);

  // 管理者フラグ
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  color: #999;
  text-decoration: underline;
`;
