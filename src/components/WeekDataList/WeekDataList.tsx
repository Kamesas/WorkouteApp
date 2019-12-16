import React from "react";
import dayjs from "dayjs";

interface IProps {
  workoutStore: any;
}

const WeekDataList: React.FC<IProps> = ({ workoutStore }) => {
  return (
    <div className="WeekDataList">
      <h4>Week's data list</h4>
      {workoutStore &&
        Object.keys(workoutStore).length > 0 &&
        Object.keys(workoutStore).map(item => {
          if (workoutStore[item].date === dayjs().format("DD MM YYYY")) return;
          const keys = Object.keys(workoutStore[item]);
          return (
            <div key={workoutStore[item].date}>
              <hr />
              <div style={{ color: "red" }}>
                Date: {workoutStore[item].date}
              </div>

              <div>
                {keys.map((exercise, i) => {
                  if (exercise === "date") return;
                  return (
                    <div key={i}>
                      <h5>{exercise}</h5>
                      <div>
                        {workoutStore[item][`${exercise}`].map(
                          (val: any, i: number) => {
                            return (
                              <div key={i}>
                                {val.nemberOfItems || 0} ===> {val.time}
                              </div>
                            );
                          }
                        )}
                      </div>
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

export default WeekDataList;
