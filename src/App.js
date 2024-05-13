import { useState, useEffect } from 'react';
import Header from './komponen/Header';
import Form from './komponen/Form';
import AssignmentList from './komponen/AssignmentList';
import Footer from './komponen/Footer';
import Addsection from './komponen/Addsection';

// Mendapatkan data dari localStorage jika ada, jika tidak, gunakan data default
const defaultAssigmentItems = [
];

export default function App() {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('assignmentItems'));
    return storedItems || defaultAssigmentItems;
  });

  // Menyimpan data ke localStorage setiap kali items berubah
  useEffect(() => {
    localStorage.setItem('assignmentItems', JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
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
