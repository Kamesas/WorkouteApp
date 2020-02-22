import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import "./Exercise.scss";
import { useDispatch, useSelector } from "react-redux";
import { onUpdatetWorkoutData } from "../../../store/actions/actionWorkout";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";

interface IProps {
  [key: string]: any;
}

const Exercise: React.FC<IProps> = ({
  exerciseName,
  exercisesData,
  workoutStore,
  currDayId,
  single = false,
  isShowDetails = false
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(isShowDetails);
  const [editing, setEditing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const userEmail = useSelector(({ authReducer }: any) => {
    if (authReducer.userData) {
      return authReducer.userData.email;
    }
    return null;
  });

  if (userEmail) return null;

  const deleteItem = (time: any) => {
    if (!editing) return;
    const newArrExercises = workoutStore[exerciseName].filter(
      (item: any) => item.time !== time
    );
    const newData = { ...workoutStore, [`${exerciseName}`]: newArrExercises };
    userEmail && dispatch(onUpdatetWorkoutData(userEmail, newData, currDayId));
  };

  const renderValue = () => {
    let sum: any = 0;

    const list = exercisesData.map((val: any, i: number) => {
      sum += +val.numberOfItems;

      return (
        <div
          key={i}
          className="Exercise-listItem"
          onClick={() => deleteItem(val.time)}
        >
          {editing && (
            <AiFillCloseCircle className="Exercise-listItem-delete" />
          )}
          <span className="Exercise-listItem-numberOfItems">
            {val.numberOfItems}
          </span>
          <span className="Exercise-listItem-time">{val.time}</span>
        </div>
      );
    });

    return {
      list,
      sum
    };
  };

  return (
    <div className="Exercise">
      {single && (
        <div className="Exercise-settings">
          <FaEdit
            onClick={() => setEditing(!editing)}
            className="Exercise-edit"
          />
          {editing && <TiWarning className="Exercise-warning" />}
        </div>
      )}
      <div className="Exercise-header">
        <div onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? (
            <FaChevronCircleUp className="Exercise-shewron" />
          ) : (
            <FaChevronCircleDown className="Exercise-shewron" />
          )}
          <span className="Exercise-title">{exerciseName}</span>
        </div>
        <span className="Exercise-sum">
          {renderValue().list.length} / {renderValue().sum}
        </span>
      </div>

      {showDetails && <div className="Exercise-list">{renderValue().list}</div>}
    </div>
  );
};

export default Exercise;
