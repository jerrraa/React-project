import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponets/AddForm/AddForm';
import EditForm from './FormComponets/EditForm/EditForm';
import './Items.css';



const Item = () => {
  const [items, setItems] = useState([]);
  const [editData, setEditData] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [adding , setAdding] = useState(false);

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
        reloadpage();
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

  const addItemsForm = () => {
    setAdding(true);
    console.log("App _addData triggered");
  };

  const editItems = item => {
    setSelectedItem(item);
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
    { adding ? (

      <AddForm addItems={addItems} category={category} />
    ) : editing ? (

      <EditForm
        selectedItem={selectedItem}
        updateItems={updateItems}
        category={category}
      />
    ) : (
      <div>
        <hr/>
         <h1>ITEMS LIST</h1> 
         <button onClick={addItemsForm} style={{ backgroundColor: '#4CAF50', color: 'white' }}>Add Item</button>
         <hr/>
         <Table items={items} editItems={editItems} deleteItems={deleteItems} />
      </div>
    )}

  </div>
  );
};

export default Item;

