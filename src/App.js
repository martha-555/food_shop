/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowGoods from "./containers/ShowPizza";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Menu from "./components/Menu";
import About from "./components/About";
import Delivery from "./components/Delivery";
import ShowBurgers from "./containers/ShowBurgers";
import ShowPizza from "./containers/ShowPizza";
import GoodsBurgers from "./components/GoodsBurgers";
import ShowSushi from "./containers/ShowSushi";
import Contacts from "./components/Contacts";
import Basket from "./components/Basket/Basket";
import MyAccount from "./containers/MyAccount";
import "./App.scss";
import BasketIcon from "./components/BasketIcon";
import Checkout from "./components/Checkout";

import CreateAccount from "./components/CreateAccount";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Container maxWidth="ld">
          <Box sx={{ bgcolor: "#100903" }} className="app-container">
            <Header />
            {/* <Menu /> */}
            <Routes>
              <Route exact path="/" element={<Menu />} />

              <Route path="/pizza" element={<ShowPizza />} />
              <Route path="/about" element={<About />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/burger" element={<ShowBurgers />} />
              <Route path="/sushi" element={<ShowSushi />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/my-account" element={<MyAccount />} />
            </Routes>
            <BasketIcon />
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
