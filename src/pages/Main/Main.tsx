import React, { useState, useEffect } from "react";
import "./Main.scss";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetWorkoutData,
  onUpdatetWorkoutData,
  onCreateWorkoutData
} from "../../store/actions/actionWorkout";
import AddForm from "../../components/AddForm/AddForm";
import Exerscises from "../../components/Exerscises/Exerscises";
import TrainingList from "../../components/TrainingList/TrainingList";
import LastTrainings from "../../components/LastTrainings/LastTrainings";

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
          numberOfItems: valueAmount,
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
            numberOfItems: valueAmount,
            time: dayjs().format("HH:mm:ss")
          }
        ];
      } else {
        newData[`${selectedExercise}`] = [
          {
            numberOfItems: valueAmount,
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
            numberOfItems: valueAmount,
            time: dayjs().format("HH:mm:ss")
          }
        ]
      };

      dispatch(onCreateWorkoutData(newData));
    }

    setValueAmount("");
  };

  const currDayId: any =
    workoutStore &&
    Object.keys(workoutStore).find(item => {
      return workoutStore[item].date === dayjs().format("DD MM YYYY");
    });

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
          <Exerscises
            setExercise={setExercise}
            selectedExercise={selectedExercise}
          />
        </div>

        <TrainingList workoutStore={workoutStore} currDayId={currDayId} />
      </div>

      <div className="Main-rightSide">
        <LastTrainings workoutStore={workoutStore} />
      </div>
    </div>
  );
};

export default Main;