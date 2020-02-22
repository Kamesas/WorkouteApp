import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import "./counting";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, getUserData } from "./store/actions/actionAuth";

const Main = React.lazy(() => import("./pages/Main/Main"));
const Auth = React.lazy(() => import("./pages/Auth/Auth"));

const App: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(({ authReducer }: any) => {
    return authReducer.token;
  });

  useEffect(() => {
    dispatch(autoLogin());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    token && dispatch(getUserData(token));
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="App-main">
          <div className="App-sideMenu">
            <SideMenu />
          </div>
          <div className="App-mainContent">
            <React.Suspense fallback={null}>
              <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" component={Main} />
              </Switch>
            </React.Suspense>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
