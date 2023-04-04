import React from "react";
import TableRow from "../TableRow/TableRow";
import './Table.css';

const Table = (props) => {
  //console.log(props.items);


  //i had to do props.items.data as the data is in a object
  //if you do props.items it'll crash which took forever to debug!
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Category ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.items.data) && props.items.data.length > 0 ? (
            props.items.data.map((item) => (
                <TableRow
                    key={item.item_id}
                    item={item}
                    editItems={props.editItems}
                    deleteItems={props.deleteItems}
                />
            ))
          ) : (
            <tr>
              <td colSpan="6">NO DATA IS AVALIABLE.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

