import React from 'react';
import './App.css';
import Example1 from './example1';

function App() {
  return (
      <div className="App">
          <svg width="960" height="600">
              <Example1 width={960} height={600} />
          </svg>
      </div>
  );
}

export default App;
