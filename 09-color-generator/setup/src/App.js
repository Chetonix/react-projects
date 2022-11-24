import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState("#f15025");
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (<>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="#f15025" className={`${error ? 'error' : 'null'}`} value={color} onChange={(e)=>setColor(e.target.value)}/>
        <button className="btn" type="submit">submit</button>
      </form>
    </section>
    <section className="colors">
      {colorList.map((color, index) => {
        return (
          <SingleColor key={index} {...color} index={index}/>
        )
      })}
      
    </section>
    </>
  )
}

export default App
