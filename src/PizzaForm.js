import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

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
          />
        </label>
        <label>
          Choose a size:
          <select name="size" onChange={onChange}>
            <option value="">---Select size---</option>
            <option value="Small">10"</option>
            <option value="Medium">12"</option>
            <option value="Large">14"</option>
          </select>
        </label>
        <h4>Toppings</h4>
        <label>
          Tomato Basil Sauce
          <input type="checkbox" name="sauce" onChange={onChange} />
        </label>
        <label>
          Mozzarella Cheese
          <input type="checkbox" name="cheese" onChange={onChange} />
        </label>
        <label>
          Pork Sausage
          <input type="checkbox" name="meat" onChange={onChange} />
        </label>
        <label>
          Spinach
          <input type="checkbox" name="veggie" onChange={onChange} />
        </label>
        <button type="submit" disabled={disabled}>
          Add To Order
        </button>
      </form>
    </div>
  );
}
