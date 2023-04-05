import React, {useEffect, useState} from "react";
import './CategoryEditForm.css';
import Button from "../Button/Button";


const CategoryEditForm = props => {

    console.log(props.selectedCategory);
    const [name, setName] = useState("");
    
    useEffect(() => {
        setName(props.selectedCategory.name);
    }, [props]);

    const handleSubmit = e => {
        e.preventDefault();
        props.editCategory({name});
        cleartextfields();
    }

    const _detectNamechange = e => {
        setName(e.target.value);
    }

    const cleartextfields = () => {
        setName("");
    }

    return (
        <><hr />
        
        <h1>EDIT FORM</h1>
         <form className="edit-form" onSubmit={handleSubmit}>
         <div className="form-group">
             <label htmlFor="name">Name: </label>
             <input type="text" name="name" id="name" value={name} onChange={_detectNamechange} />
         </div>
         <Button className="btn btn-primary" type="submit" text="Add" />
         </form>
         <hr/>
         </>
         
    )
}

export default CategoryEditForm;