import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <div className="header">
          <h1>Lambda Eats</h1>
          <nav>
            <Link to="/">Home</Link>
            <a href="#">Help</a>
          </nav>
        </div>
        <div className="hero">
          <Link to="/pizza">Pizza?</Link>
        </div>
      </div>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>

        <Route path="/">
          <App />
        </Route>
      </Switch>
    </>
  );
};
export default App;
