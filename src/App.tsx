import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import "./counting";
import { getUserData } from "./store/actions/actionAuth";
import { useDispatch } from "react-redux";

const Main = React.lazy(() => import("./pages/Main/Main"));
const Auth = React.lazy(() => import("./pages/Auth/Auth"));
const CV = React.lazy(() => import("./pages/CV/CV"));

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("WorkoutUserData");

    if (userData) {
      dispatch(getUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
        <main className="App-main">
          <div
            className={`App-sideMenu ${showMenu ? "App-sideMenu-showed" : ""}`}
          >
            <SideMenu setShowMenu={setShowMenu} />
          </div>
          <div className="App-mainContent">
            <React.Suspense fallback={null}>
              <Switch>
                <Route path="/cv" component={CV} />
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
