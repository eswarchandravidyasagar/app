import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
     <h1>Resume App</h1>
     <div  id='prompt' >
     <textarea id='q' />
      <button id='submit'>Submit</button>
     
     
     </div>
     <div  id='answer'>Answer  </div>
     
    </div>
  );
}

export default App;
