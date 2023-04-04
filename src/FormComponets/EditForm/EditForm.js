import React, {useEffect, useState} from "react";
import './EditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [quantity, setQuantity] = useState("");
    const [sku, setSku] = useState("");

    useEffect(() => {
        setTitle(props.selectedData.title);
        setDescription(props.selectedData.description);
        setPrice(props.selectedData.price);
        setCategory_id(props.selectedData.category_id);
        setQuantity(props.selectedData.quantity);
        setSku(props.selectedData.sku);
    }, [props.selectedData]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.editItems({title, description, price, category_id, quantity, sku});
      };

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

    console.log(props.selectedData);
    return (
        <div>
            <h2>Edit Item</h2>
        </div>
    );
}

export default EditForm;
