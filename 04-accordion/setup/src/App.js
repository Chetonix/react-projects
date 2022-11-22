import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className='info'>
        <SingleQuestion />
      </section>
    </div>
  );
}

export default App;
