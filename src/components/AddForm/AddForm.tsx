import React from "react";

interface IProps {
  valueAmount: string;
  setValueAmount(val: string): any;
  onPostDate(): any;
  selectedExercise: string;
  [key: string]: any;
}

const AddForm: React.FC<IProps> = ({
  valueAmount,
  setValueAmount,
  onPostDate,
  selectedExercise
}) => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onPostDate();
  };

  return (
    <form className="AddForm" onSubmit={onSubmitHandler}>
      <input
        type="number"
        value={valueAmount}
        placeholder={selectedExercise}
        onChange={({ target: { value } }) => setValueAmount(value)}
      />
      <button>add</button>
    </form>
  );
};

export default AddForm;
