import React from "react";
import "./App.css";
import Login from "./components/Login/LoginComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import SaleItems from "./components/SaleItems/SaleItems";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import FocusOnItem from './components/FocusOnItem/FocusOnItem'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          {/* !!!!!!!!!!!!! IF no token at localStorage redirect to homepage !!!!!!!!!!!!! */}
          <PrivateRoute exact path="/shop" component={Shop} to="/" />
          <PrivateRoute exact path="/sale" component={SaleItems} to="/" />
{/*           <Route exact path="/:item_id" component={FocusOnItem} />  Nem Kell Backenden lekezelem??*/}          
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
