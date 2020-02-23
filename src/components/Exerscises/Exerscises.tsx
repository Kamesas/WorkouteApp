import React, { useEffect } from "react";
import { exercises } from "./model";
import "./Exercises.scss";
import { IProps } from "./interfaces";
// import { FiChevronDown } from "react-icons/fi";

const Exerscises: React.FC<IProps> = ({ setExercise, selectedExercise }) => {
  useEffect(() => {
    setExercise("pushUps");
    // eslint-disable-next-line
  }, []);

  const handleChange = (value: string) => {
    setExercise(value);
  };

  return (
    <div className="Exercises">
      <label className="Exercises-label">
        {/*  <FiChevronDown size={24} className="Exercises-label-icon" /> */}
        <select
          value={selectedExercise}
          className="Exercises-select"
          onChange={({ target: { value } }) => handleChange(value)}
        >
          {exercises.map(item => {
            return (
              <option
                key={item.alias}
                className="Exercises-option"
                value={item.alias}
              >
                {item.title}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Exerscises;
