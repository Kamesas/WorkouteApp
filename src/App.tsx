import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const Main = React.lazy(() => import("./pages/Main"));
const Auth = React.lazy(() => import("./pages/Auth"));

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <React.Suspense fallback={null}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Main} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
