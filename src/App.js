import NavBar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

import "./App.css";

import {
  KidsBannerTop,
  KidsBannerTop1,
  TravelEssentialsEquipmentBannerTop,
  WinterCollectionBannerTop,
  kidsBannerTop,
  mensBannerTop,
  offerBannerTop,
  shoesBannerTop,
} from "./Components/Hero/HeroPages/ImgLinks";
import Checkout from "./Components/Checkout/Checkout";
import PaymentSuccess from "./Components/Checkout/PaymentDone/PaymentSuccess";
import RegisterAndLogin from "./firebase/RegisterAndLogin";
import ForgotPassword from "./firebase/ForgotPassword";
import PasswordLogin from "./firebase/PasswordLogin";
import ShopSubCategory from "./Pages/ShopSubCategory";
import ShopOffCategory from "./Pages/ShopOffCategory";
import HeroSection1 from "./Components/Hero/HeroPages/HeroSection1";
import Footer from "./Components/Footer/Footer";

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
            path="/kids"
            element={[
              <NavBar />,
              <ShopCategory banner={KidsBannerTop1} category="kids" />,
            ]}
          />
          {/* SubCatogory  */}
          <Route
            path="/mens/shoes"
            element={[
              <NavBar />,
              <ShopSubCategory banner={shoesBannerTop} subcategory="mensshoes" />,
            ]}
          />
          <Route
            path="/mens/wintercollection"
            element={[
              <NavBar />,
              <ShopSubCategory banner={WinterCollectionBannerTop} subcategory="WinterCollection" />,
            ]}
          />
          <Route
            path="/SportsEquipment"
            element={[
              <NavBar />,
              <ShopSubCategory banner={mensBannerTop} subcategory="SportsEquipment" />,
            ]}
          />
          <Route
            path="/TravelEssentialsEquipment"
            element={[
              <NavBar />,
              <ShopSubCategory banner={TravelEssentialsEquipmentBannerTop} subcategory="TravelEssentialsEquipment" />,
            ]}
          />
          <Route
            path="/sale50%"
            element={[
              <NavBar />,
              <ShopOffCategory banner={offerBannerTop} discount="45%" />,
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
