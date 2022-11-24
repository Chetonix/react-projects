import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let itemList = localStorage.getItem('itemList');
  if (itemList) {
    return (itemList = JSON.parse(localStorage.getItem('itemList')));
  } else {
    return [];
  }
};

function App() {

  

  const [name, setName] = useState("")
  const [itemList, setItemList] = useState(getLocalStorage());
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setItemList([]);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setItemList(
        itemList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    }
    else {
      showAlert(true, 'success', 'item added to the list');
      const item = {id: new Date().getTime().toString(), title: name};
      setItemList(itemList=> {
      return [...itemList, item];
      });
      setName("");
    }
    
    // console.log(item);
    // setItemList(itemList.map(item => {
    //   return item}));

    
      
     
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setItemList(itemList.filter(item=>item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = itemList.find(item=> item.id===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={itemList} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
          <List items={itemList} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    </section>
  )
  
}

export default App
