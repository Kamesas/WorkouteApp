import React from "react";
import dayjs from "dayjs";
import "./LastTrainings.scss";
import Exercise from "./Exercise/Exercise";

interface IProps {
  workoutStore: any;
}

const LastTrainings: React.FC<IProps> = ({ workoutStore }) => {
  return (
    <div className="LastTrainings">
      <div className="LastTrainings-header">Last trainings</div>

      {workoutStore &&
        Object.keys(workoutStore)
          .reverse()
          .slice(0, 3)
          .map(item => {
            if (workoutStore[item].date === dayjs().format("DD MM YYYY"))
              return null;
            const keys = Object.keys(workoutStore[item]);
            const { date } = workoutStore[item];

            return (
              <div key={date} className="LastTrainings-list">
                <div className="LastTrainings-date">{date}</div>

                {keys.map((exercise, i) => {
                  if (exercise === "date") return null;
                  return (
                    <Exercise
                      key={i}
                      exerciseName={exercise}
                      exercisesData={workoutStore[item][`${exercise}`]}
                    />
                  );
                })}
              </div>
            );
          })}
    </div>
  );
};

export default LastTrainings;
