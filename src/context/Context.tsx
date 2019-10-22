import React, { createContext, useReducer, useState } from "react";

const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

export const reducer = (state: any, action: { type: any }) => {
  switch (action.type) {
    case SHOW_ALERT:
      return "show alert";
      break;

    case HIDE_ALERT:
      return "hide alert";
      break;

    default:
      break;
  }
  return state;
};

type ContextProps = {
  alert: string;
  show(): void;
  hide(): void;
  objectData: object;
  setObjectData({  }: object): void;
};

const Context = createContext<Partial<ContextProps>>({});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, "alert start");
  const [objectData, setObjectData] = useState<any>({});

  const show = () => dispatch({ type: SHOW_ALERT });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <Context.Provider value={{ alert: state, show, hide, objectData, setObjectData }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
