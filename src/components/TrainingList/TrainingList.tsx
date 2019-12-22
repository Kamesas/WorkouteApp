import React from "react";
import { IProps } from "./interfaces";
import dayjs from "dayjs";

const TrainingList: React.FC<IProps> = ({ workoutStore, currDayId }) => {
  if (!currDayId) return <h2>There was no training today</h2>;

  return (
    <div className="TrainingList">
      <hr />
      <div style={{ color: "red" }}>Date: {dayjs().format("DD MMM YYYY")}</div>
      {Object.keys(workoutStore[currDayId]).map((item, i) => {
        if (item === "date") return null;
        return (
          <div key={i}>
            <h5>{item}</h5>
            <div>
              {workoutStore[currDayId][`${item}`].map((val: any, i: number) => {
                return (
                  <div key={i}>
                    {val.numberOfItems || 0} ===> {val.time}
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
