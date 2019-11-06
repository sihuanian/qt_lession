import React from 'react';
import SlideProgress from './SlideProgress'

function App() {
  return (
    <div className="App">
      <SlideProgress value={0.5} onChange={p => { console.log('p', p) } } />
    </div>
  );
}

export default App;
