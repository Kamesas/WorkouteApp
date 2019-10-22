import React from 'react';
import {observer} from 'mobx-react';

const Count2 = ({store}: any) => {
  return (

    <div>
        <h3>{store.count}</h3>
        <button onClick={() => store.inc()}>+1</button>
        <button onClick={() => store.dec()}>-1</button>
      </div>
  );
};

export default observer(Count2);
