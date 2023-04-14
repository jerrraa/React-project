import React, {useEffect, useState} from "react";
import './CategoryEditForm.css';
import Button from "../Button/Button";


const CategoryEditForm = (props) => {
  const [category_id, setID] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Set the initial state of the form based on the selected category
    setID(props.selectedCategory.category_id);
    setName(props.selectedCategory.name);
  }, [props.selectedCategory]);

  const handleChangeID = (e) => {
    setID(e.target.value);
  };

  const detectChangeName = (e) => {
    setName(e.target.value);
  };

  const clearTextFields = () => {
    setName("");
  };

  const _edit = (e) => {
    e.preventDefault();
    //i found out i was only passing the name instead of category object.
    //now it updates correctly.
    const category = { category_id, name };
    props.editCategory(category);
    clearTextFields();
  };

  return (
    <>
      <hr />
      <h1>EDIT FORM</h1>
      <form className="edit-form" onSubmit={_edit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} onChange={detectChangeName} />
        </div>
        <Button className="btn btn-primary" type="submit" text="Save" />
      </form>
      <hr />
    </>
  );
};

export default CategoryEditForm;
