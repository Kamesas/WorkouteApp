import { GET_WORKOUT_ACTION } from "./types";

export const onGetWorkoutData = (userEmail: string) => async (
  dispatch: Function
) => {
  try {
    const res = await fetch(
      `https://workout-ec6f3.firebaseio.com/${userEmail}.json`
    );
    const data = await res.json();

    return dispatch({
      type: GET_WORKOUT_ACTION,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const onCreateWorkoutData = (userEmail: string, newData: any) => async (
  dispatch: Function
) => {
  console.log(userEmail);
  try {
    await fetch(`https://workout-ec6f3.firebaseio.com/${userEmail}.json`, {
      method: "POST",
      body: JSON.stringify(newData)
    });

    return dispatch(onGetWorkoutData(userEmail));
  } catch (err) {
    console.log(err);
  }
};

export const onUpdatetWorkoutData = (
  userEmail: string,
  newData: any,
  currDayId: string
) => async (dispatch: Function) => {
  console.log(newData, currDayId);
  try {
    await fetch(
      `https://workout-ec6f3.firebaseio.com/${userEmail}/${currDayId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newData)
      }
    );

    return dispatch(onGetWorkoutData(userEmail));
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
