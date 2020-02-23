import React from "react";
import { IProps } from "./interfaces";
import "./TrainingList.scss";
import Exercise from "../LastTrainings/Exercise/Exercise";

const TrainingList: React.FC<IProps> = ({ workoutStore, currDayId }) => {
  if (!currDayId) return <h2>There was no training today</h2>;

  return (
    <div className="TrainingList">
      {workoutStore &&
        Object.keys(workoutStore[currDayId]).map((item, i) => {
          if (item === "date") return null;
          return (
            <Exercise
              key={i}
              single={true}
              isShowDetails={true}
              currDayId={currDayId}
              workoutStore={workoutStore[currDayId]}
              exerciseName={item}
              exercisesData={workoutStore[currDayId][`${item}`]}
            />
          );
        })}
    </div>
  );
};

export default TrainingList;
