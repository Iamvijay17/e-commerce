import NavBar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

import "./App.css";

import {
  kidsBannerTop,
  mensBannerTop,
} from "./Components/Hero/HeroPages/ImgLinks";
import Checkout from "./Components/Checkout/Checkout";
import PaymentSuccess from "./Components/Checkout/PaymentDone/PaymentSuccess";
import RegisterAndLogin from "./firebase/RegisterAndLogin";
import ForgotPassword from "./firebase/ForgotPassword";
import PasswordLogin from "./firebase/PasswordLogin";
import ShopSubCategory from "./Pages/ShopSubCategory";

function App() {
  return (
    <div className="container-fluid bg-white ">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterAndLogin />} />
          <Route path="/login" element={<PasswordLogin />} />
          <Route
            path="/mens"
            element={[
              <NavBar />,
              <ShopCategory banner={mensBannerTop} category="mens" />,
            ]}
          />

          <Route
            path="/womens"
            element={[
              <NavBar />,
              <ShopCategory banner={kidsBannerTop} category="womens" />,
            ]}
          />
          {/* SubCatogory  */}
          <Route
            path="/mens/shoes"
            element={[
              <NavBar />,
              <ShopSubCategory banner={mensBannerTop} subcategory="mensshoes" />,
            ]}
          />
          <Route path="/product" element={[<NavBar />, <Product />]}>
            <Route path=":productId" element={[<NavBar />, <Product />]} />
          </Route>
          <Route path="/cart" element={[<NavBar />, <Cart />]} />
          <Route path="/checkout" element={[<NavBar />, <Checkout />]} />
          <Route
            path="/paymentsuccess"
            element={[<NavBar />, <PaymentSuccess />]}
          />

          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/home" element={[<NavBar />, <Shop />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
