import React from 'react';
import './Category.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from './TableComponents/Table/CategoryTable';
import CategoryAddForm from './FormComponets/AddForm/CategoryAddForm';
import CategoryEditForm from './FormComponets/EditForm/CategoryEditForm';


const Category = props => {


    const [category, setCategories] = useState([]);
    const [edit, setEdit] = useState({});
    const [editing, setEditing] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState({});
    const [adding, setAdding] = useState(false);


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

    const addCategory = category => {
        console.log(category);
        axios.post("http://localhost:3001/category/", category)
        .then(response => {
            reloadpage();
            setCategories(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const updateCategory = category => {
        console.log("presseeddd")
        axios.patch(`http://localhost:3001/category/${category.category_id}`, {
            name: category.name
        })
        .then(response => {
            setCategories(response.data);
            reloadpage();
        })
        .catch(error => {
            console.log(error);
        });
    };

    const deleteCategory = category => {
        console.log("category");
        axios.delete(`http://localhost:3001/category/${category.category_id}`)
        .then(response => {
            setCategories(response.data);
            console.log("delete category");
            reloadpage();
        })
        .catch(error => {
            console.log(error);
        });
    };

    const editCategory = category => {
        setEditing(true);
        setEdit(category);
        console.log("edit category has been clicked");
    };

    const addCategoryForm = () => {
        setAdding(true);
        console.log("true add");
    };

    const reloadpage = () => {
        window.location.reload();
    }

    console.log(category);

    return (

<div className="App">
    { adding ? (

      <CategoryAddForm addCategory={addCategory} />
    ) : editing ? (

      <CategoryEditForm
        selectedCategory={edit}
        setEditing={setEditing}
        editCategory={updateCategory}
      />
    ) : (
      <div>
        <hr/>
         <h1>CATEGORIES LIST</h1> 
         <button onClick={addCategoryForm} style={{ backgroundColor: '#4CAF50', color: 'white' }}>Add Category</button>
         <hr/>
         <Table category={category} editCategory={editCategory} deleteCategory={deleteCategory} />
      </div>
    )}
      </div>
    );
}

export default Category;