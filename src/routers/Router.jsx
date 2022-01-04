import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* トップページはデフォルトレイアウトを使用 */}
        <Route exact path="/">
          {/* templates/DefaultLayout.jsx */}
          <DefaultLayout>
            {/* pages/Top.jsx */}
            <Top />
          </DefaultLayout>
        </Route>
        {/* ユーザー一覧はヘッダーのみレイアウトを使用 */}
        <Route path="/users">
          {/* templates/HeaderOnly.jsx */}
          <HeaderOnly>
            {/* pages/Users.jsx */}
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
