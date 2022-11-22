import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {

  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(['all', ...new Set((data.map(item=>item.category)))]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    let newMenuItems = data.filter((item)=> item.category === category);
    setMenuItems(newMenuItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}

export default App;
