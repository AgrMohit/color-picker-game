import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='main-box'>
      <div className='message-box default-choice'>hsl(120, 50%, 50%)</div>
      <div className='message-box correct-choice'>Correct Answer</div>
      <div className='message-box wrong-choice'>Wrong Answer</div>
      <div className='color-box slateblue'></div>
      <div className='color-box aquamarine'></div>
      <div className='color-box salmon'></div>
      <div className='color-box cornflowerblue'></div>
      <div className='color-box palegreen'></div>
    </div>
  );
};

export default App;
