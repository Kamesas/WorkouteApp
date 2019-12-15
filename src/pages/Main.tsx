import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetWorkoutData,
  onUpdatetWorkoutData,
  onCreateWorkoutData,
  onDeleteWorkoutData
} from "../store/actions/actionWorkout";

const exercises = [
  { title: "Push ups", alias: "pushUps" },
  { title: "Pull ups", alias: "pullUps" },
  { title: "Knee bend", alias: "kneeBend" }
];

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const workoutStore = useSelector((state: any) => state.workoutStore);
  const [valueAmount, setValueAmount] = useState<string>("");
  const [selectedExercise, setExercise] = useState<string>("pushUps");

  useEffect(() => {
    dispatch(onGetWorkoutData());
  }, []);

  const onPostDate = () => {
    if (Object.keys(workoutStore).length !== 0) {
      onUpdateNewData(selectedExercise);
    } else {
      onCreateData();
    }
  };

  const onCreateData = () => {
    const newData = {
      date: dayjs().format("DD MM YYYY"),
      [`${selectedExercise}`]: [
        {
          nemberOfItems: valueAmount,
          time: dayjs().format("HH:mm:ss")
        }
      ]
    };

    dispatch(onCreateWorkoutData(newData));
  };

  const onUpdateNewData = (selectedExercise: string) => {
    const currDayId: any = Object.keys(workoutStore).find(item => {
      return workoutStore[item].date === dayjs().format("DD MM YYYY");
    });

    let newData;

    if (currDayId) {
      newData = workoutStore[currDayId];

      if (workoutStore[currDayId][`${selectedExercise}`]) {
        newData[`${selectedExercise}`] = [
          ...workoutStore[currDayId][`${selectedExercise}`],
          {
            nemberOfItems: valueAmount,
            time: dayjs().format("HH:mm:ss")
          }
        ];
      } else {
        newData[`${selectedExercise}`] = [
          {
            nemberOfItems: valueAmount,
            time: dayjs().format("HH:mm:ss")
          }
        ];
      }
      dispatch(onUpdatetWorkoutData(newData, currDayId));
    } else {
      console.log("now today");
      newData = {
        date: dayjs().format("DD MM YYYY"),
        [`${selectedExercise}`]: [
          {
            nemberOfItems: valueAmount,
            time: dayjs().format("HH:mm:ss")
          }
        ]
      };

      dispatch(onCreateWorkoutData(newData));
    }

    //newData.date = dayjs().format("DD MM YYYY");

    console.log(newData);
  };

  return (
    <div className="Main">
      <div>
        {exercises.map(item => {
          return (
            <div key={item.alias} onClick={() => setExercise(item.alias)}>
              {item.title}
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={valueAmount}
        onChange={({ target: { value } }) => setValueAmount(value)}
      />
      <button onClick={onPostDate}>add</button>
      <button onClick={() => dispatch(onDeleteWorkoutData({ yes: "yes" }))}>
        test
      </button>
      <hr />
      {selectedExercise}
    </div>
  );
};

export default Main;
