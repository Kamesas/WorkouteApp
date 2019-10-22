import React from "react";
import {inject, observer} from 'mobx-react';
import CounterStore2, {CounterStore} from '../store/counterStore';

interface UsersProps {
  counter: CounterStore;
}

const Counter = (props: UsersProps) => {

  if (!props.counter) {
    return null;
  }

  return (
    <div className="Counter">

      <button onClick={() => props.counter && props.counter.incVal(1)}>+1</button>
      <button onClick={() => props.counter && props.counter.incVal(3)}>+3</button>
      <h2>{props.counter.value}</h2>

      <h2>{props.counter.value2}</h2>
      <button onClick={props.counter.decVal}>-1</button>

      <h2>Sum: {props.counter.SumCount}</h2>

    </div>

  );

};

Counter.defaultProps = {
  counter: CounterStore2,
};

export default inject('counterStore')(observer(Counter));
