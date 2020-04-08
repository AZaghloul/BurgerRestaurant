//Input: label, name , maxPrice
//Output: onChange

import React from "react";

const Range = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="range"
        className="form-control-range custom-range"
        id={props.name}
        name={props.name}
        min="0"
        max="40"
        step="5"
        value={props.maxPrice}
        onChange={props.onMaxPriceChange}
      />
      <div className="alert alert-primary m-2">
        Max Salary: <strong> {props.maxPrice}</strong>
      </div>
    </div>
  );
};

export default Range;
