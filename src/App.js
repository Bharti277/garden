import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="app">
      <h1 className="font-extrabold">Redux Project</h1>
    </div>
  );
};

export default App;
