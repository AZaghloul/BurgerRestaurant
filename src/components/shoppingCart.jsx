import React, { Component } from "react";
import Product from "./product";

//input ==> props
//output ==> props

class ShoppingCart extends Component {
  //1.Constructor
  constructor(props) {
    super();
    // this.state = { count: props.count };
    // this.state.name = "Ahmed";
    // // this.setState() // NEVER USE
    console.log("ShoppingCart ==> constructor");
  }

  componentDidMount() {
    //Call Backend
    console.log("ShoppingCart ==> componentDidMount");
  }

  componentDidUpdate(oldProps, prevState) {
    console.log("ShoppingCart ==> componentDidUpdate");

    // console.log("prev props: ", oldProps);
    // console.log("current props: ", this.props);
  }

  render() {
    console.log("ShoppingCart ==> render");
    const { products, onReset, onIncrement, onDelete } = this.props;

    return (
      <div>
        <h3>Shopping Carts</h3>

        <button onClick={onReset} className="btn btn-secondary m-2">
          Reset
        </button>

        {products.map(p => (
          <Product
            key={p.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            id={p.id}
            name={p.name}
            count={p.count}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
