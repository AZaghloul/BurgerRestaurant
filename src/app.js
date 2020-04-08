import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import Product from "./product";
import ShoppingCart from "./components/shoppingCart";
import NavBar from "./components/navbar";
import Menu from "./components/menu";
import About from "./components/pages/about";
import ContactUs from "./components/pages/contactus";
import Home from "./components/pages/home";
import NotFound from "./components/pages/notfound";
import Login from "./components/login";

//LifeCycle Hooks
class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Large Burger",
        price: 40,
        count: 0,
        isInCart: false,
        typeId: 1
      },
      {
        id: 2,
        name: "Large Fries",
        price: 20,
        count: 0,
        isInCart: false,
        typeId: 2
      },
      {
        id: 3,
        name: "Large Cola",
        price: 15,
        count: 0,
        isInCart: false,
        typeId: 3
      },
      {
        id: 4,
        name: "Regular Burger",
        price: 30,
        count: 0,
        isInCart: false,
        typeId: 1
      },
      {
        id: 5,
        name: "Regular Fries",
        price: 15,
        count: 0,
        isInCart: false,
        typeId: 2
      },
      {
        id: 6,
        name: "Regular Cola",
        price: 10,
        count: 0,
        isInCart: false,
        typeId: 3
      },
      {
        id: 7,
        name: "Small Burger",
        price: 20,
        count: 0,
        isInCart: false,
        typeId: 1
      },
      {
        id: 8,
        name: "Small Fries",
        price: 10,
        count: 0,
        isInCart: false,
        typeId: 2
      },
      {
        id: 9,
        name: "Small Cola",
        price: 5,
        count: 0,
        isInCart: false,
        typeId: 3
      }
    ],
    types: [
      { id: 1, name: "Burger" },
      { id: 2, name: "Fries" },
      { id: 3, name: "Cola" }
    ],
    pageSize: 4,
    activePage: 1,
    activeFilter: 0,
    maxPrice: 40
  };

  handleMaxPriceChange = e => {
    this.setState({ maxPrice: e.target.value, activePage: 1 });
  };

  handleFilterChange = typeId => {
    this.setState({ activeFilter: typeId, activePage: 1 });
  };

  handlePageChange = page => {
    this.setState({ activePage: page });
  };

  handleIncrement = id => {
    //Clone
    const products = [...this.state.products];
    //Using id ==> object
    const obj = products.filter(p => p.id === id)[0];
    //Using object ==> index
    const index = products.indexOf(obj);
    //Deep Clone
    products[index] = { ...products[index] };

    //Edit
    products[index].count++;

    //Set State
    this.setState({ products: products });
  };

  handleDelete = id => {
    //Clone
    const products = [...this.state.products];
    //Edit
    //Using id ==> Object
    const obj = products.filter(p => p.id === id)[0];
    //Using obj ==> index
    const index = products.indexOf(obj);
    //Using index ===> DELETE
    products.splice(index, 1);
    //Set State
    this.setState({ products: products });
  };

  handleReset = () => {
    //Clone
    const products = [...this.state.products];

    //Edit
    const newProducts = products.map(p => {
      return { ...p, count: 0 };
    });

    //set state
    this.setState({ products: newProducts });
  };

  handleAddToCart = product => {
    //Clone
    const products = [...this.state.products];
    //Using object ==> index
    const index = products.indexOf(product);
    //Deep Clone
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <NavBar count={this.state.products.filter(p => p.isInCart).length} />

        <main className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route
              path="/menu"
              render={props => (
                <Menu
                  {...props}
                  products={this.state.products}
                  types={this.state.types}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  activeFilter={this.state.activeFilter}
                  maxPrice={this.state.maxPrice}
                  onToggleCart={this.handleAddToCart}
                  pageChanged={this.handlePageChange}
                  filterChanged={this.handleFilterChange}
                  onMaxPriceChange={this.handleMaxPriceChange}
                />
              )}
            />
            <Route
              path="/cart"
              render={props => (
                <ShoppingCart
                  {...props}
                  products={this.state.products.filter(p => p.isInCart)}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  onReset={this.handleReset}
                />
              )}
            />
            <Route path="/home" component={Home} />
            <Route path="/notfound" component={NotFound} />

            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
          </Switch>
        </main>

        {/* <Menu
          products={this.state.products}
          onToggleCart={this.handleAddToCart}
        />
        <ShoppingCart
          products={this.state.products.filter(p => p.isInCart)}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        /> */}
      </div>
    );
  }
}

export default App;

/////////////////////////////////////////////////////
/* Conditionally */
/* {this.state.colors.length === 0 && <div>NO COLORS AVALIABLE.</div>} */

/* Render List */
/* <ul>
          {this.state.colors.map(color => (
            <li>{color}</li>
          ))}
        </ul> */
