import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3 className="restaurant-orders">Restaurant Orders</h3>
      <ul className="orders-list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
