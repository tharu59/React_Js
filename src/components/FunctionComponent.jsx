import React, { useState } from "react";

const FunctionComponent = ({ name, age, author, setName }) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState(" ");
  const reduceCount = () => {
    setCount(count - 1);
  };
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
      <button onClick={() => setName(changeName)}>change name to ...</button>
    </div>
  );
};
export default FunctionComponent;
