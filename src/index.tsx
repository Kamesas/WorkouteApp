import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import {autorun, configure} from "mobx";
import { store } from "./store";

configure({enforceActions: "always"});

autorun(() => {
  ReactDOM.render(<Provider {...store}>
    <App/>
  </Provider>, document.getElementById("root"));
});


//ReactDOM.render(<App/>, document.getElementById("root"));
