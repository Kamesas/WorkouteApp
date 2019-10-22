import React, { useContext } from "react";
import { Context } from "../../context/Context";

interface IProps {
  [key: string]: any;
}

const TodoList: React.FC<IProps> = () => {
  const { alert, show, hide, objectData, setObjectData } = useContext(Context);

  console.log(objectData);
  return (
    <div className="TodoList">
      <div>TodoList</div>
      <div>{alert}</div>
      <button onClick={() => show && show()}>show alert</button>
      <button onClick={() => hide && hide()}>show alert</button>
      <button onClick={() => setObjectData && setObjectData({ text: "some" })}>obj</button>
    </div>
  );
};

export default TodoList;
