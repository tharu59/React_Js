import "./App.css";
// for Components
// import ClassComponent from "./components/ClassComponent";
// import FunctionComponent from "./components/FunctionComponent";
// For Pages
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// HOC Layout
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const author = "Software Developer";

  const [name, setName] = useState("ASUS");
  return (
    <Routes>
      <Route
        path='/'
        element={
          <BaseHoc>
            {" "}
            <ClassComponent />{" "}
          </BaseHoc>
        }
      />
      <Route
        path='/functional-component'
        element={
          <BaseHoc>
            <FunctionComponent
              name={name}
              age={10}
              author={author}
              setName={setName}
            />
          </BaseHoc>
        }
      />
    </Routes>
  );
}

export default App;
