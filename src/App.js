import { useState } from 'react';
import Header from './komponen/Header';
import Form from './komponen/Form';
import AssignmentList from './komponen/AssignmentList';
import Footer from './komponen/Footer';
import Addsection from './komponen/Addsection';

const assigmentItems = [
  {
    id: 1,
    name: 'PBO TUBES',
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: 'DRPL SKPL',
    quantity: 1,
    checked: false,
  },
  {
    id: 3,
    name: 'Socio tugas Video',
    quantity: 1,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(assigmentItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Addsection />
      <Form onAddItem={handleAddItem} />
      <AssignmentList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}