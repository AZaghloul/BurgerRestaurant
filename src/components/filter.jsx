//Input: types, activeFilter

import React from "react";

const Filter = props => {
  const renderedTypes = [{ id: 0, name: "All" }, ...props.types];

  return (
    <ul className="list-group">
      {renderedTypes.map(type => (
        <li
          key={type.id}
          className={
            props.activeFilter === type.id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.filterChanged(type.id)}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
