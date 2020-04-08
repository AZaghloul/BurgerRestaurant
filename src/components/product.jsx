import React, { Component } from "react";

class Product extends Component {
  componentWillUnmount() {
    console.log("Product ==> componentWillUnmount");
  }

  render() {
    const { id, name, count, onIncrement, onDelete } = this.props;

    return (
      <div>
        <span>{name}</span>
        <span
          className={
            count === 0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary"
          }
        >
          {count}
        </span>
        <button
          onClick={() => onIncrement(id)}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>

        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

export default Product;
