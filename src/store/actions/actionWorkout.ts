import {
  GET_WORKOUT_ACTION,
  POST_WORKOUT_ACTION,
  DELETE_WORKOUT_ACTION,
  UPDATE_WORKOUT_ACTION,
  CREATE_WORKOUT_ACTION
} from "./typesTodos";

const initialState: any = {
  id1: {
    date: "12 12 2019",
    pushUps: [{ numberOfItems: 12, time: "12:12:56" }]
  },
  id2: {
    date: "15 12 2019",
    pushUps: [{ numberOfItems: 10, time: "12:12:46" }]
  }
};

//const fromLS = localStorage.setItem("workout", JSON.stringify(initialState));

// export const onGetWorkoutData = () => {
//   return {
//     type: GET_WORKOUT_ACTION,
//     payload: JSON.parse(fromLS) ? fromLS : initialState
//   };
// };

export const onGetWorkoutData = () => async (dispatch: Function) => {
  try {
    const res = await fetch("https://workout-ec6f3.firebaseio.com/Test.json");
    const data = await res.json();

    return dispatch({
      type: GET_WORKOUT_ACTION,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

// export const onCreateWorkoutData = (newData: any) => {
//   console.log(newData);
//   return {
//     type: CREATE_WORKOUT_ACTION,
//     payload: newData
//   };
// };

export const onCreateWorkoutData = (newData: any) => async (
  dispatch: Function
) => {
  try {
    await fetch("https://workout-ec6f3.firebaseio.com/Test.json", {
      method: "POST",
      body: JSON.stringify(newData)
    });

    return dispatch(onGetWorkoutData());
  } catch (err) {
    console.log(err);
  }
};

// export const onUpdatetWorkoutData = (newData: any, currDayId: string) => {
//   return {
//     type: UPDATE_WORKOUT_ACTION,
//     payload: newDate,
//     currDayId
//   };
// };

export const onUpdatetWorkoutData = (newData: any, currDayId: string) => async (
  dispatch: Function
) => {
  console.log(newData, currDayId);
  try {
    await fetch(`https://workout-ec6f3.firebaseio.com/Test/${currDayId}.json`, {
      method: "PUT",
      body: JSON.stringify(newData)
    });

    return dispatch(onGetWorkoutData());
  } catch (err) {
    console.log(err);
  }
};

export const onDeleteWorkoutData = (id: any) => {
  console.log(id);
  return {
    type: DELETE_WORKOUT_ACTION,
    payload: id
  };
};
