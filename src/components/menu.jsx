//input ==> products
//output ==> onAddToCart

import React from "react";
import Cart from "./cart";
import Pagination from "./pagination";
import Filter from "./filter";
import Range from "./range";

const Menu = props => {
  const { products, pageSize, activePage, pageChanged, activeFilter } = props;

  //Filteration (Sidebar)
  let filteredProducts = products;
  if (activeFilter !== 0)
    filteredProducts = products.filter(p => p.typeId === activeFilter);

  //Filteration (Range)
  filteredProducts = filteredProducts.filter(p => p.price <= props.maxPrice);

  //Pagination
  const startItem = pageSize * (activePage - 1);
  const showedProducts = filteredProducts.slice(
    startItem,
    pageSize + startItem
  );

  return (
    <div>
      <h1>Menu</h1>
      <div className="row">
        <div className="col-3">
          <Filter
            types={props.types}
            activeFilter={props.activeFilter}
            filterChanged={props.filterChanged}
          />
          <Range
            label="Max Price"
            name="price"
            maxPrice={props.maxPrice}
            onMaxPriceChange={props.onMaxPriceChange}
          />
        </div>
        <div className="col">
          <input
            // value={props.value}
            // onChange={props.onChange}
            className="form-control"
            placeholder="Serch..."
          />
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {showedProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <Cart
                      product={product}
                      isInCart={product.isInCart}
                      onToggleCart={props.onToggleCart}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            count={filteredProducts.length}
            pageSize={pageSize}
            activePage={activePage}
            pageChanged={pageChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
