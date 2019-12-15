import React from "react";
import { exercises } from "./model";

interface IProps {
  setExercise(val: string): any;
  [key: string]: any;
}

const Exerscises: React.FC<IProps> = ({ setExercise }) => {
  return (
    <div className="Exerscises">
      {exercises.map(item => {
        return (
          <div key={item.alias} onClick={() => setExercise(item.alias)}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Exerscises;
