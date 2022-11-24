import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState("")
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(false);
  const [editing, isEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    // try {

    //   const item = {id: new Date().getTime().toString(), title: name};
    //   console.log(item);
    //   // setItemList(itemList.map(item => {
    //   //   return item}));

    //   setItemList(itemList=> {
    //     console.log(itemList);
    //     return [...itemList, item];
    //   })
    //   }
    //  catch (error) {
    //   console.log(error);
    //   setError(false);
    // }
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn">submit</button>
        </div>
      </form>
      <div className='grocery-container'>
        <div className='grocery-list'>
          <List items={itemList} />
          <button className="clear-btn" onClick={()=>setItemList([])}>clear items</button>
        </div>
      </div>
    </section>
  )
  
}

export default App
