import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();
export const ProductContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <ProductContext.Provider value={[selectedProduct, setSelectedProduct]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkOut">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <Order></Order>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
