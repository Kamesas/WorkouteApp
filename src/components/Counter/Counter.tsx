import React from "react";
import { connect } from "react-redux";
import { onIncrement, onReset, addNumber } from "../../store/actions/actionsCounter";
import { useSelector, useDispatch } from "react-redux";

interface IProps {
  counterValue: number;
  onDecrement: () => number;
  onIncrement: () => number;
}

const Counter: React.FC<IProps> = ({ counterValue, onDecrement, onIncrement }) => {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const dispatch = useDispatch();

  const addNumberToCounter = () => {
    return dispatch(addNumber(10));
  };

  return (
    <div className="Counter">
      <div>Counter = {counter}</div>
      <button onClick={onDecrement}>+1</button>
      <button onClick={() => dispatch(onReset())}>reset to zero</button>
      <button onClick={onIncrement}>-1</button>
      <div>{counterValue}</div>
      <button onClick={addNumberToCounter}>add 10</button>
    </div>
  );
};

const mapStateToProps = ({ counter }: { counter: number }) => {
  return {
    counterValue: counter
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onIncrement: () => dispatch(onIncrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
