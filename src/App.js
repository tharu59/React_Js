import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

function App() {
  const author = "Software Developer";

  const [name, setName] = useState("ASUS");
  return (
    <div>
      <p>Class Components</p>
      <ClassComponent />
      {/* <ClassComponent></ClassComponent> both any one*/}
      <br />

      <p>Functional Components</p>
      {/* <FunctionComponent name='Tharunkumar' age={20} author={author} /> */}
      <FunctionComponent
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
      {/* <FunctionComponent /> */}
    </div>
  );
}

export default App;
