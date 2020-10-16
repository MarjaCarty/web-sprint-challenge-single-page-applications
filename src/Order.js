import React from "react";

export default function Order(props) {
  const { order } = props;

  return (
    <div>
      <h2>Your Order</h2>
      <p>Name: {order[0].name}</p>
      <p>Size: {order[0].size}</p>
      <p>Toppings:</p>
      {order[0].toppings.map((topping) => (
        <li>{topping}</li>
      ))}
      <p>Special instructions: {order[0].special}</p>
    </div>
  );
}
