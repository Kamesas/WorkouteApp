import React, { useState, useEffect } from "react";
import "./Main.scss";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetWorkoutData,
  onUpdatetWorkoutData,
  onCreateWorkoutData
} from "../store/actions/actionWorkout";
import AddForm from "../components/AddForm/AddForm";
import Exerscises from "../components/Exerscises/Exerscises";
import TrainingList from "../components/TrainingList/TrainingList";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const workoutStore = useSelector((state: any) => state.workoutStore);
  const [valueAmount, setValueAmount] = useState<string>("");
  const [selectedExercise, setExercise] = useState<string>("");

  useEffect(() => {
    dispatch(onGetWorkoutData());
    // eslint-disable-next-line
  }, []);

  const onPostDate = () => {
    Object.keys(workoutStore).length !== 0
      ? onUpdateNewData(selectedExercise)
      : onCreateData();
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
    setValueAmount("");
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

    setValueAmount("");
  };

  return (
    <div className="Main">
      <div className="Main-leftSide">
        <div className="Main-leftSide-header">
          <AddForm
            valueAmount={valueAmount}
            setValueAmount={setValueAmount}
            onPostDate={onPostDate}
            selectedExercise={selectedExercise}
          />
          <Exerscises setExercise={setExercise} />
        </div>

        <TrainingList workoutStore={workoutStore} />
      </div>

      <div className="Main-rightSide">WEEK'S Data</div>
    </div>
  );
};

export default Main;
