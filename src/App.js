import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponets/AddForm/AddForm';
import EditForm from './FormComponets/EditForm/EditForm';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);
  const [editData, setEditData] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const [category, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/items");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const addItems = item => {
    axios
      .post("http://localhost:3001/items/", item)
      .then(response => {
        reloadpage();
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  const updateItems = item => {
    axios
      .patch(`http://localhost:3001/items/${item.item_id}`, {
        item: item
      })
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteItems = item => {
    console.log(item); // check the item object
    axios
      .delete(`http://localhost:3001/items/${item.item_id}`)
      .then(response => {
        setItems(response.data);
        console.log("App _deleteData triggered");
        reloadpage();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const reloadpage = () => {
    window.location.reload();
}

  const editItems = item => {
    setSelectedData(item);
    setEditing(true);
    console.log("App _editData triggered");

  };

 //get all categories table data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/category");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    
  return (
    
    <div className="App">
      <h1>ITEMS LIST</h1> 

      <Table items={items} editItems={editItems} deleteItems={deleteItems} />
      <AddForm category={category} addItems={addItems} />

      
    </div>
  );
};

export default App;

