import React from "react";
import { IProps } from "./interfaces";

const TrainingList: React.FC<IProps> = ({ workoutStore, currDayId }) => {
  if (!workoutStore) return <h2>Nothing</h2>;

  return (
    <div className="TrainingList">
      <hr />
      <div style={{ color: "red" }}>Date: {workoutStore[currDayId].date}</div>
      {Object.keys(workoutStore[currDayId]).map((item, i) => {
        if (item === "date") return;
        return (
          <div key={i}>
            <h5>{item}</h5>
            <div>
              {workoutStore[currDayId][`${item}`].map((val: any, i: number) => {
                return (
                  <div key={i}>
                    {val.nemberOfItems || 0} ===> {val.time}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainingList;
