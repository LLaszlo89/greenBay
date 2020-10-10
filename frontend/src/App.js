import React from "react";
import "./App.css";
import Login from "./components/Login/LoginComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import SaleItems from "./components/SaleItems/SaleItems";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/shop" component={Shop} to="/" />
          <PrivateRoute exact path="/create" component={SaleItems} to="/" />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
