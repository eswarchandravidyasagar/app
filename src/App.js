import './App.css';
import React from 'react';
import ImgMediaCard from './components/card';
import ResponsiveAppBar from './components/appMenu';
import SimplePaper from './components/paper';
import ComplexGrid from './components/nestedGrid';
import UnstyledInputIntroduction from './components/input';
import UnstyledSelectIntroduction from './components/select';



function App() {
  return (
    <div className="App">
          <ResponsiveAppBar />

     <h1>Resume App</h1>
     <div  id='prompt' >
     <textarea id='q' />
      <button id='submit'>Submit</button>
     
     
     </div>
<div  id='answer'>Answer  </div>
  <ImgMediaCard />
<p>Paper Component</p>
   <SimplePaper />
<p>Grid Component</p>
  <ComplexGrid />
<p>Input Component </p>
  <UnstyledInputIntroduction />
<p>Select element</p>
  <UnstyledSelectIntroduction />
</div>
  );
}

export default App;
