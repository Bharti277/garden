import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const my_state = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  
  console.log(my_state)
  return (
    <>
      <h1>Redux Practice</h1>

    <div className='app'>
      <div className="negative-value"><button>-</button></div>
      <div className="value-target">Values to behere</div>
      <div className="negative-value"><button>+</button></div>
    </div>
    </>
  )
}

export default App