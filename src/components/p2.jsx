import React from "react";

const P2 = props => {
  return (
    <div class="col-lg-4 col-sm-6">
      <div class="product-item">
        <div class="pi-pic">
          <img src="img/products/product-1.jpg" alt="" />
          <div class="sale pp-sale">Sale</div>
          <div class="icon">
            <i class="icon_heart_alt"></i>
          </div>
          <ul>
            <li class="w-icon active">
              <a href="#">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
            <li class="quick-view">
              <a href="#">+ Quick View</a>
            </li>
            <li class="w-icon">
              <a href="#">
                <i class="fa fa-random"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="pi-text">
          <div class="catagory-name">Towel</div>
          <a href="#">
            <h5>Pure Pineapple</h5>
          </a>
          <div class="product-price">
            $14.00
            <span>$35.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2;
