import React from "react";

export default function PizzaForm() {
  return (
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
    </form>
  );
}
