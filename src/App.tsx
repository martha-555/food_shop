/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Contacts from "./components/Contacts";
import Basket from "./components/Basket/Basket";
import MyAccount from "./containers/MyAccount";
import "./App.scss";
import BasketIcon from "./components/BasketIcon";
import Checkout from "./components/Checkout";
import GoodsBurgers from "./components/Goods/GoodsBurgers";
import GoodsPizza from "./components/Goods/GoodsPizza";
import GoodsSushi from "./components/Goods/GoodsSushi";
import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/burger" element={<GoodsBurgers />} />
          <Route path="/pizza" element={<GoodsPizza />} />
          <Route path="/sushi" element={<GoodsSushi />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
        <BasketIcon />
      </Router>
    </>
  );
}

export default App;
