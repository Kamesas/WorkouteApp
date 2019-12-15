import React from "react";

interface IProps {
  valueAmount: string;
  setValueAmount(val: string): any;
  onPostDate(): any;
  [key: string]: any;
}

const AddForm: React.FC<IProps> = ({
  valueAmount,
  setValueAmount,
  onPostDate
}) => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onPostDate();
  };

  return (
    <form className="AddForm" onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={valueAmount}
        onChange={({ target: { value } }) => setValueAmount(value)}
      />
      <button>add</button>
    </form>
  );
};

export default AddForm;
