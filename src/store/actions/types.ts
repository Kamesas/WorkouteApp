export const GET_WORKOUT_ACTION = "GET_WORKOUT_ACTION";
export const POST_WORKOUT_ACTION = "POST_WORKOUT_ACTION";
export const UPDATE_WORKOUT_ACTION = "UPDATE_WORKOUT_ACTION";
export const DELETE_WORKOUT_ACTION = "DELETE_WORKOUT_ACTION";
export const CREATE_WORKOUT_ACTION = "CREATE_WORKOUT_ACTION";

export interface ITodoItem {
  id: number | string;
  title: string;
  isDone: boolean;
}
