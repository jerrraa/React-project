import React, {useEffect, useState} from "react";
import './AddForm.css';
import Button from "../Button/Button";

const AddForm = props => {
    const [item_id, setItem_id] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [quantity, setQuantity] = useState("");
    const [sku, setSku] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.addItems({title, description, price, category_id, quantity, sku});
        cleartextfields();
    }
    const _detectTitlechange = e => {
        setTitle(e.target.value);
    }

    const _detectDescriptionchange = e => {
        setDescription(e.target.value);
    }

    const _detectPricechange = e => {
        setPrice(e.target.value);
    }

    const _detectCategory_idchange = e => {
        setCategory_id(e.target.value);
    }
    
    const _detectQuantitychange = e => {
        setQuantity(e.target.value);
    }

    const _detectSkuchange = e => {

        setSku(e.target.value);
    }

    const cleartextfields = () => {
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory_id("");
        setQuantity("");
        setSku("");
    }

    return (
        <><hr />
        <h1>Add Item</h1>
        <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" value={title} onChange={_detectTitlechange} />
            </div>
            <div className="form-group">
            <label htmlFor="title">Category: </label>
            <select name="category_id" id="category_id" value={category_id} onChange={_detectCategory_idchange}>
            <option value="0">Select Category</option>
                {Array.isArray(props.category.data) && props.category.data.length > 0 ? (
                    props.category.data.map((category) => (
                        <option key={category.category_id} value={category.category_id}>{category.name}</option>
                    ))
                ) : (
                    <option value="0">NO DATA IS AVALIABLE.</option>
                )}
            </select>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" value={description} onChange={_detectDescriptionchange} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" value={price} onChange={_detectPricechange} />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity: </label>
                <input type="text" name="quantity" id="quantity" value={quantity} onChange={_detectQuantitychange} />
            </div>
            <div className="form-group">
                <label htmlFor="sku">SKU: </label>
                <input type="text" name="sku" id="sku" value={sku} onChange={_detectSkuchange} />
            </div>
            <Button className="btn btn-primary" type="submit" text="Add to Database" />
        </form><hr /></>

     
    );
}

export default AddForm;