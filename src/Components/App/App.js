import React from 'react';
import Universe from '../Uneverse';

import './App.css';

function App() {

  return (
    <div class="container">
        <h1 className='news-header'>WebDev News</h1>
        <canvas id="canvas" width="300" height="300"></canvas>
        <Universe />
    </div>
  );
}

export default App;
