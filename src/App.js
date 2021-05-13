import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment_number,decrement_number} from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch(); 
  return (
    <>
       <div className="counter_card">
       <h1 className="heading">Counter App - Using Redux</h1>
       <div className="quantity">
         <a className="quantity__minus" title="Decrement Number" onClick={()=> { dispatch(decrement_number) } }><span>-</span></a>
         <input type="text" name="quantity" className="quantity__input" value={myState}/>
         <a className="quantity__plus" title="Increment Number" onClick={()=> { dispatch(increment_number) } }><span>+</span></a>
       </div>
       </div>
    </>
  );
}

export default App;
