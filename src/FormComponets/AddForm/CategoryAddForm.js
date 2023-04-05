import React, {useEffect, useState} from "react";
import Button from "../Button/Button";

const CategoryAddForm = props => {
    const [name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.addCategory({name});
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
        <h1>Add Category</h1>
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={name} onChange={_detectNamechange} />
            </div>
            <Button className="btn btn-primary" type="submit" text="Add" />
        </form>
        <hr/>
        </>
    );

};

export default CategoryAddForm;


