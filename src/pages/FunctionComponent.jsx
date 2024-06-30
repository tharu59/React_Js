import React, { useState } from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState(" ");
  const reduceCount = () => {
    setCount(count - 1);
  };
  const { name, age, author, setName } = props;
  return (
    <div>
      <p>This is Functional Components</p>
      <button onClick={() => setCount(count + 2)}>
        Click me to inc/add by 2
      </button>
      <button onClick={reduceCount}>Click me to dec/sub by 1</button>
      <h2>{count}</h2>
      <h4>
        This is {name} <br /> {name} is {age} old <br /> {name} is a {author}{" "}
      </h4>
      {/* <input onChange={(e) => console.log(e.target.value)}/> */}
      <input onChange={(e) => setChangeName(e.target.value)} />
      {/* <button onClick={() => props.setName(changeName)}> */}
      <button onClick={() => setName(changeName)}>change name to ...</button>
    </div>
  );
};
export default BaseHoc(FunctionComponent);
