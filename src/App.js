import React, { useState, useEffect } from "react";
import PizzaForm from "./PizzaForm";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";

const App = () => {
  ///initial values///
  const initialFormValues = {
    name: "",
    size: "",
    sauce: false,
    cheese: false,
    meat: false,
    veggie: false,
    special: "",
  };

  const initialFormErrors = {
    name: "",
    size: "",
  };

  const initialDisabled = true;

  ///state setters///

  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    //axios call in here
  };

  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["sauce", "cheese", "meat", "veggie"].filter((topping) => {
        return formValues[topping];
      }),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <Switch>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            submit={onSubmit}
            change={onChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
