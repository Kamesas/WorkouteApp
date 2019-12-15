import React, { useEffect } from "react";
import { exercises } from "./model";
import "./Exercises.scss";
import { IProps } from "./interfaces";

const Exerscises: React.FC<IProps> = ({ setExercise }) => {
  useEffect(() => {
    setExercise("pushUps");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Exercises">
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
