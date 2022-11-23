import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [numPara, setNumPara] = useState(0);
  const [paras, setParas] = useState([]);
  const handleChange = (e) => {
    setNumPara(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(numPara);
    if (numPara <= 0) {
      amount = 1;
    }
    if (numPara > 8) {
      amount = 8;
    }
    setParas(data.slice(0, amount));
    console.log(paras);
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" value={numPara} onChange={handleChange}/>
      <button className="btn">generate</button>
    </form>
  
    
        <article className="lorem-text">
          {paras.map((para, index) => {
            return <p key={index}>{para}</p>
          })}
        </article>
    
  </section>
    )
}

export default App;
