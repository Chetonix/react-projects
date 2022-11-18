import React, { useState }  from 'react';
import data from './data';
import List from './List';


function App() {

  const [people, setPeople] = useState(data);

  const dataList = people.map(item => <List key={item.id} {...item}/>)
  const dataLength = people.length;

  return (
  <main>
    <section className='container'>
      <h3>{dataLength} birthdays today</h3>
      {dataList}
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
  )
}

export default App;
