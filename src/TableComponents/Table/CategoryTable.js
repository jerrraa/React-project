import React from 'react';
import './CategoryTable.css';
import CategoryTableRow from "../TableRow/CategoryTableRow";

//i originally had categorytablerow in another fold however it was not working.
//kept throwing a module error unless i moved into the same folder as table row.
const CategoryTable = props => {
    //console.log(props);

    return (
        <div className="table">
      <table>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Name</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.category.data) && props.category.data.length > 0 ? (
            props.category.data.map((item) => (
                <CategoryTableRow
                    key={item.category_id}
                    category={item}
                    editCategory={props.editCategory}
                    deleteCategory={props.deleteCategory}
                />
            ))
          ) : (
            <tr>
              <td colSpan="6"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    );
}

export default CategoryTable;