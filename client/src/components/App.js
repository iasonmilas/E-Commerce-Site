import Footer from "./Footer";
import Header from "./NAV/Header";
import Homepage from "./Homepage";
import Cart from "./NAV/Cart";
import About from "./About";
import ShopAll from "./ShopAll";
import Category from "./Category";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Router>
      <MainDiv>
        <GlobalStyles />
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/shop">
            <ShopAll />
          </Route>

          <Route exact path="/shop/:id">
            <ProductPage />
          </Route>

          <Route exact path="/shop/category/:category">
            <Category />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </MainDiv>
    </Router>
  );
};

const MainDiv = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

export default App;
