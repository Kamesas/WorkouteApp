import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import "./conting";
import { useDispatch } from "react-redux";
import { logout, autoLogin } from "./store/actions/actionAuth";

const Main = React.lazy(() => import("./pages/Main"));
const Auth = React.lazy(() => import("./pages/Auth"));

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="App-main">
          <div className="App-sideMenu">
            <button onClick={() => dispatch(logout())}>logout</button>
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
