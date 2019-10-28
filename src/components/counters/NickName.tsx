import React from 'react';
import {observer} from 'mobx-react';

const NickName = ({nickName}: any) => {
  console.log(nickName);
  return (
    <div>
      <h2>{nickName.firstName}</h2>
      <h3>{nickName.age}</h3>
      <h4>{nickName.nickname}</h4>
      <button onClick={() => nickName.inc()}>+1</button>
      <button onClick={() => nickName.dec()}>-1</button>
    </div>
  );
};

export default observer(NickName);
