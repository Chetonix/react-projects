import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {

  const [expandData, setExpandData] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setExpandData(!expandData)}>
          {expandData ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expandData && <p>{info}</p>}
    </article>
  )
};

export default Question;
