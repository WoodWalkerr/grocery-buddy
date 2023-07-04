import React, { useState } from "react";
import PropTypes from 'prop-types';


const GroceryItemComponent = ({ item, handleEditItem, handleDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);
  const [errors, setErrors] = useState("");

  const onEdit = () => {
    if (newItem) {
      handleEditItem(item.id, newItem);
      setIsEditing(false);
      setErrors("");
    } else {
      setErrors("Grocery item must not be empty.");
    }
  };

  return (
    <>
      <li>
        {isEditing ? (
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}

        <div>
          <button
            onClick={() => {
              isEditing ? onEdit() : setIsEditing(true);
            }}
            className="btn-edit"
          >
            {isEditing ? "Saveeee" : "Edit"}
          </button>
          <button
            onClick={() => handleDeleteItem(item.id)}
            className="btn-delete"
          >
            Delete
          </button>
        </div>
      </li>
      {errors ? <p className="errors">{errors}</p> : null}
    </>
  );
};

GroceryItemComponent.propTypes = {
  item: PropTypes.any,
  handleEditItem: PropTypes.any,
  handleDeleteItem: PropTypes.any,
}
export default GroceryItemComponent;
