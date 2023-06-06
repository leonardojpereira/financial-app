import { useState } from "react";
import Header from './components/Header'
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  };

  return (
    <>
      <Header/>
      <Dashboard itemList={itemList} />
      <Form
        itemList={itemList}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}