import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm() {
  return (
    <div>
      <Link to="/">Home</Link>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          Choose a size:
          <select name="size">
            <option value="">---Select size---</option>
            <option value="Small">10"</option>
            <option value="Medium">12"</option>
            <option value="Large">14"</option>
          </select>
        </label>
        <h4>Toppings</h4>
        <label>
          Tomato Basil Sauce
          <input type="checkbox" name="sauce" />
        </label>
        <label>
          Mozzarella Cheese
          <input type="checkbox" name="cheese" />
        </label>
        <label>
          Pork Pepperoni
          <input type="checkbox" name="meat" />
        </label>
        <label>
          Spinach
          <input type="checkbox" name="veggie" />
        </label>
      </form>
    </div>
  );
}
