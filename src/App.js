import React, { useState } from "react";
import Header from './components/Header'
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table";

export default function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  };

  const formatCurrency = (value, type) => {
    const formattedValue = parseFloat(value).toFixed(2).replace(".", ",");
    const currencySymbol = type === "Saída" ? "- R$" : "R$";
    return `${currencySymbol} ${formattedValue}`;
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
      <Table itemList={itemList} onDeleteItem={handleDeleteItem} formatCurrency={formatCurrency} />
    </>
  );
}