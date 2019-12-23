import React from "react";
import dayjs from "dayjs";

interface IProps {
  workoutStore: any;
  [key: string]: any;
}

const LastTrainings: React.FC<IProps> = ({ workoutStore }) => {
  return (
    <div className="LastTrainings">
      <div>Last trainings</div>
      {workoutStore &&
        Object.keys(workoutStore).length > 0 &&
        Object.keys(workoutStore)
          .reverse()
          .slice(0, 3)
          .map(item => {
            if (workoutStore[item].date === dayjs().format("DD MM YYYY"))
              return null;
            const keys = Object.keys(workoutStore[item]);
            return (
              <div key={workoutStore[item].date}>
                <hr />
                <div style={{ color: "red" }}>
                  Date: {workoutStore[item].date}
                </div>

                <div>
                  {keys.map((exercise, i) => {
                    if (exercise === "date") return null;
                    return (
                      <div key={i}>
                        <h5>{exercise}</h5>
                        <div>
                          {workoutStore[item][`${exercise}`].map(
                            (val: any, i: number) => {
                              return (
                                <div key={i}>
                                  {val.numberOfItems || 0} ===> {val.time}
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

export default LastTrainings;
