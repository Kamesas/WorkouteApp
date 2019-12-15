import { GET_WORKOUT_ACTION } from "./typesTodos";

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

// export const onDeleteWorkoutData = (id: any) => {
//   return {
//     type: DELETE_WORKOUT_ACTION,
//     payload: id
//   };
// };
