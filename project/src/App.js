import './App.css';
import AddItem from './components/AddItem';
import ItemsComponent from './components/ItemsComponent';
import Temperature from './components/Temperature';
import { useState } from 'react';

function App() {

  let [newItems, setItems] = useState([]);

  function addNewItem(data) {
    setItems(state => [...state, data]);
  }

  function deleteItem(id) {
    setItems(state => newItems.filter(x => x.id !== id));
  }

  return (
    <section className="container">
      <ItemsComponent items={newItems} deleteItem={deleteItem} />

      <Temperature />

      <AddItem addNewItem={addNewItem} />
    </section>
  );
}

export default App;
