import React from "react";
import './TableRow.css';

const TableRow = props => {
    
   // console.log(props.item);
    return (
        <tr key = {props.index}>
            <td>{props.item.item_id}</td>
            <td>{props.item.category_id}</td>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{props.item.price}</td>
            <td>{props.item.sku}</td>
            <td>
                <button className="edit" onClick={() => props.editItems(props.item)}>Edit</button>
                <button className="delete" onClick={() => props.deleteItems(props.item)}>Delete</button>
            </td>
        </tr>        
    );
}
export default TableRow;