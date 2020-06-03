import React, { useEffect, useState } from "react";
// import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
// import Header from "./components/Header/Header";
// import SideMenu from "./components/SideMenu/SideMenu";
import "./counting";
// import { getUserData } from "./store/actions/actionAuth";
// import { useDispatch } from "react-redux";
import { list } from "./UI/list";
// import { FaDivide } from "react-icons/fa";

// const Main = React.lazy(() => import("./pages/Main/Main"));
// const Auth = React.lazy(() => import("./pages/Auth/Auth"));
// const CV = React.lazy(() => import("./pages/CV/CV"));

const App: React.FC = () => {
  const [pacientList, setPacientList] = useState<
    Array<{ id: number; name: string; age: number }>
  >([]);
  const [minAge, setMinAge] = useState<string>("0");
  const [maxAge, setMaxAge] = useState<string>("120");

  useEffect(() => {
    let listPatient: { id: number; name: string; age: number }[] = [];

    list.forEach((item, i) => {
      const reg = /([^\)]+)\((.*)\)/;
      const patient = item["Пацієнт"].match(reg);
      const a = patient![2].match(/\d+/g);
      const pat = patient![1];
      const age = a;
      listPatient.push({ id: i, name: pat.trim(), age: +age![0] });
    });

    setPacientList(listPatient);
  }, []);

  return (
    <div className="App">
      {<div>Total: {list.length}</div>}

      <div className='inputWrap'>
        <label>
          from
          <input
            type="text"
            value={minAge}
            onChange={({ target: { value } }) => setMinAge(value)}
          />
        </label>
        <label>
          to
          <input
            type="text"
            value={maxAge}
            onChange={({ target: { value } }) => setMaxAge(value)}
          />
        </label>

        <div className="amount">{pacientList.filter((item) => item.age >= +minAge && item.age <= +maxAge).length}</div>
      </div>

      <div className="patientWrap">
        <ul>
          {pacientList.map((item, i) => {
            return (
              <li key={item.id}>
                {item.id}. {item.name} ===> {item.age} year
              </li>
            );
          })}
        </ul>

        <ul>
          {pacientList
            .sort((a, b) => b.age - a.age)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {item.name} ===> {item.age} year
                </li>
              );
            })}
        </ul>

        <ul>
          {pacientList
            .sort((a, b) => a.age - b.age)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {item.name} ===> {item.age} year
                </li>
              );
            })}
        </ul>

        <ul>
          {pacientList
            .filter((item) => item.age >= +minAge && item.age <= +maxAge)
            .map((item, i) => {
              return (
                <li key={item.id}>
                  {i + 1} = {item.name} ===> {item.age} year
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
