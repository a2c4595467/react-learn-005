/**
 * ユーザー一覧ページ
 */
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/UserState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

// テストデータ作成
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hogehoge${val}`,
    image: "https://source.unsplash.com/LTQMgx8tYqM",
    email: "aaaa@aaa.com",
    phone: "080-0000-0000",
    company: {
      name: "ああああ株式会社"
    },
    website: "https://www.google.com/"
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

// スタイル
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
