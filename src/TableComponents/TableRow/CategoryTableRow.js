import React from 'react';
import './CategoryTableRow.css';

const CategoryTableRow = props => {


    return (
        <tr key = {props.index}>
            <td>{props.category.category_id}</td>
            <td>{props.category.name}</td>
            <td>
                <button onClick={() => props.editCategory(props.category)}>Edit</button>
                <button onClick={() => props.deleteCategory(props.category)}>Delete</button>
            </td>
        </tr>

    );


}

export default CategoryTableRow;