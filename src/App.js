import React from 'react';

const App = () => {
  return (
    <>
       <div className="counter_card">
       <h1>Counter App - Using Redux</h1>
       <div className="inc_dec_button">
         <button className="dec_button">-</button>
         <input type="text" value="0"/>
         <button className="inc_button">+</button>
       </div>
       </div>
    </>
  );
}

export default App;
