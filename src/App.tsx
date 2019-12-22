import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import "./conting";

const Main = React.lazy(() => import("./pages/Main"));
const Auth = React.lazy(() => import("./pages/Auth"));

const App: React.FC = () => {
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
