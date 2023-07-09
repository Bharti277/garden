import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "./redux/dashboardAction";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
  const handleClick = () => {
    const value = 42;
    dispatch(incrementCounter(value));
  };
  
  const decrement = () => {
    const value = 20;
    dispatch(decrementCounter(value));
  };
  return (
    <div className="text-center">
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
