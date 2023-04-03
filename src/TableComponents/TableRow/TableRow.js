import React from "react";
import './TableRow.css';

const TableRow = props => {
    return (
        <tr key = {props.item.id}>
            <td>{props.item.item}</td>
            <td>{props.item.category_id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td>{props.item.sku}</td>
            <td>
                <button onClick={() => props.editData(props.item)}>Edit</button>
                <button onClick={() => props.deleteData(props.item)}>Delete</button>
            </td>
        </tr>        
    );
}
export default TableRow;