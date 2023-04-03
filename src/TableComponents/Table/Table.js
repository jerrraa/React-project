import React from "react";
import TableRow from "../TableRow/TableRow";
import './Table.css';

import React from "react";
import TableRow from "../TableRow/TableRow";
import './Table.css';

const Table = props => {
    const { data } = props;
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Category ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>SKU</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item => {
                        return <TableRow key={item.id} item={item} editData={props.editData} deleteData={props.deleteData} />
                    }
                    )}
                </tbody>
            </table>
        </div>
    );

}

export default Table;