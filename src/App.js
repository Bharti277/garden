import { useDispatch, useSelector } from "react-redux";
import {
  addNumberSuffix,
  capitalizeFirstLetter,
  decrementCounter,
  incrementCounter,
} from "./redux/dashboardAction";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const arr = ["name", "age", "bio", "hello"];
  const dispatch = useDispatch();
  const [arrCopy, setArrayCopy] = useState(arr);
  const handleClick = () => {
    const value = 42;
    dispatch(incrementCounter(value));
  };

  const decrement = () => {
    const value = 40;
    dispatch(decrementCounter(value));
  };

  const deleteSelected = (itemIndex) => {
    let filteredArray = arrCopy.filter((el, i) => i !== itemIndex);
    console.log("delete", filteredArray);
    setArrayCopy(filteredArray);
  };
  return (
    <div className="text-center">
      <Navbar />
      <p>{counter} Counter</p>
      <p>{capitalizeFirstLetter("hello world")}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>decrement</button>
      {arrCopy.map((ele, i) => {
        return (
          <ul key={i}>
            <li>
              {ele}{" "}
              <button onClick={() => deleteSelected(i)}>delete item</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
