import React from "react";
import "./AddForm.scss";
import { IProps } from "./interfaces";

const AddForm: React.FC<IProps> = ({
  valueAmount,
  setValueAmount,
  valueWeight,
  setValueWeight,
  onPostDate,
  selectedExercise,
}) => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valueAmount) return;
    onPostDate();
  };

  return (
    <form className="AddForm" onSubmit={onSubmitHandler}>
      <input
        type="number"
        value={valueWeight}
        placeholder="weight"
        onChange={({ target: { value } }) => setValueWeight(value)}
        className="AddForm-input AddForm-input-weight"
      />
      <input
        type="number"
        value={valueAmount}
        placeholder={selectedExercise}
        onChange={({ target: { value } }) => setValueAmount(value)}
        className="AddForm-input AddForm-input-times"
      />
      <button className="AddForm-button">add</button>
    </form>
  );
};

export default AddForm;
