import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';



const App = props => {

  
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editing, setEditing] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  
  useEffect(() => {
    let url = "http://127.0.0.1:3001/items";
    axios.get(url).then(response => {

      setData(response.data);
    }).catch(error => {

      console.log(error);
    });
  }, []);

  const addData = item => {
    let url = "http://127.0.0.1:3001/items/";
    axios.post(url, {
      item: item

    }).then(response => {

      setData(response.data);
    }).catch(error => {

      console.log(error);
    });
  }

  const updateData = item => {
    let url = `http://127.0.0.1:3001/items/${item.id}`;
    axios.patch(url, {
      item: item
    }).then(response => {
        
        setData(response.data);
      }
    ).catch(error => {
      console.log(error);
    }
    );
  }

  const deleteData = item => {
    let url = `http://127.0.0.1:3001/items/${item.id}`;
    axios.delete(url, {

      item: item
    }).then(response => {
      setData(response.data);

    }).catch(error => {
      console.log(error);
    });

  }

  const _editData = item => {
    setSelectedData(item);
    setEditing(true);

    console.log("App _editData triggered");
  }


  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
