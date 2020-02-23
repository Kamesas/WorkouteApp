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
const TEST_TOKEN =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNiOGUwZDk3Mjg2MWIwNGJlN2RjNzVhMWIzYmUzYjIyOWIyNWYyMDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd29ya291dC1lYzZmMyIsImF1ZCI6IndvcmtvdXQtZWM2ZjMiLCJhdXRoX3RpbWUiOjE1ODI0NTc0OTQsInVzZXJfaWQiOiJneUxQUXZwc0FvVGM2T1hjQnBDWjc1bFl0MmEyIiwic3ViIjoiZ3lMUFF2cHNBb1RjNk9YY0JwQ1o3NWxZdDJhMiIsImlhdCI6MTU4MjQ1NzQ5NCwiZXhwIjoxNTgyNDYxMDk0LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GO5785iKwYo9CdyuLTjY5EAYA7MSCYn7-2WdeP5AhlKWWgeQIjcU7SPCE2jOCbTUiDZVDCaxHHMyEmbsaLKdbYEuMdJycw7si5F6OcehHu9K2AzIOLAB9XGsuQlHpw8b7y0JnJXDiAGkPwMB89R38Lpkr_6A-XiVWsUsUDLpxrzUyO7EJpsRNR1LTG9Rzefz68nq2M7T7YdvmU08MXLva5T-hMnuGuqNrAPRsFjZKRXal2xTEneSGRoXZ1kHyFYokB3Gja1MW-B2NGZvjLVK8p4zXqiWR5ymgVFXmvM0F8jXSeRxBvUlVZ9I-1_q-wSGUzVeY8IlDz5D-hfMF2RKxQ";

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
    dispatch(getUserData(token || TEST_TOKEN));
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
