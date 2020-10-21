import React from "react";
import { Link } from "react-router-dom";
import Order from "./Order";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors, order } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={onSubmit}>
        <div className="errorMessages">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={onChange}
            value={values.name}
          />
        </label>
        <label>
          Choose a size:
          <select name="size" value={values.size} onChange={onChange}>
            <option value="">---Select size---</option>
            <option value="Small">10"</option>
            <option value="Medium">12"</option>
            <option value="Large">14"</option>
          </select>
        </label>
        <h4>Toppings</h4>
        <label>
          Tomato Basil Sauce
          <input
            type="checkbox"
            name="sauce"
            onChange={onChange}
            checked={values.sauce === true}
          />
        </label>
        <label>
          Mozzarella Cheese
          <input
            type="checkbox"
            name="cheese"
            onChange={onChange}
            checked={values.cheese === true}
          />
        </label>
        <label>
          Pork Sausage
          <input
            type="checkbox"
            name="meat"
            onChange={onChange}
            checked={values.meat === true}
          />
        </label>
        <label>
          Spinach
          <input
            type="checkbox"
            name="veggie"
            onChange={onChange}
            checked={values.veggie === true}
          />
        </label>
        <label>
          Special Instructions
          <textarea
            name="special"
            rows="4"
            cols="50"
            onChange={onChange}
            value={values.special}
          ></textarea>
        </label>
        <button id="submit" type="submit" disabled={disabled}>
          Add To Order
        </button>
        {order[0] ? <Order order={order} /> : null}
      </form>
    </div>
  );
}
