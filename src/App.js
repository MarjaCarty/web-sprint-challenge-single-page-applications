import React from "react";
import PizzaForm from "./PizzaForm";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
