import React from "react";

interface IProps {
  workoutStore: any;
  [key: string]: any;
}

const TrainingList: React.FC<IProps> = ({ workoutStore }) => {
  return (
    <div className="TrainingList">
      {workoutStore &&
        Object.keys(workoutStore).length > 0 &&
        Object.keys(workoutStore).map(item => {
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

export default TrainingList;
