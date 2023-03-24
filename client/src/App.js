import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Products from './Pages/Category/Products';
import Product from './Pages/Product/Product';
import Register from './Pages/Register/Register';
import Footer from './Components/Footer/Footer';
import UserContext from "./Context/UserContext";
import NavContext from "./Context/NavContext";
import Account from './Pages/Account/Account';
import ForgotPassword from './Pages/ResetPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Cart from './Pages/Cart/Cart';
import Category from './Pages/Category/Category';
import Careers from './Pages/Careers/Careers';
import Customers from './Pages/Customers/Customers';
import FAQ from './Pages/FAQ/FAQ';
import Partners from './Pages/Partners/Partners';
import Testimonials from './Pages/Testimonials/Testimonials';
import Confirm from './Pages/Confirm/Confirm';
import SuccessConfirm from './Pages/Confirm/SuccessConfirm';
import Search from './Pages/Search/Search';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const incrementQuoteNum = () => {
    setUserData({...userData, [userData.user.quoteNum]: userData.user.quoteNum++})
  }

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {

      try {
        const userRes = await axios.get("/users", 
        {headers: {"x-auth-token": token},
      });
      // console.log("user result:", userRes);
      setUserData({ token, user: userRes.data });
      getCartQuantity(); 
      } catch (error) {
        console.log("User must login.");
      }
    }
  };

  const logout = () => {
    setUserData({
        token: undefined,
        user: undefined,
    });
    localStorage.setItem("auth-token", "");
};

  const [cartQuantity, setCartQuantity] = useState();

  const getCartQuantity = async () => {
    try {
        const quantityAggregate = await axios.get(`/cart/quantity`, {
          headers: { "x-auth-token": localStorage.getItem("auth-token") }
      });
        setCartQuantity(quantityAggregate.data[0].sum)
    } catch (error) {
        setCartQuantity(0)
        // console.log("error getting cart quantity", error)   
    }
  }

  useEffect(() => {
    checkLoggedIn();
    getCartQuantity();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <UserContext.Provider value = {{ userData, setUserData, incrementQuoteNum, checkLoggedIn }}>
          <NavContext.Provider value = {{cartQuantity, getCartQuantity}}>
            <Navigation logout={logout}/>
            <Switch>
                <Route path="/Category" component={Category}/>
                <Route path="/Products" component={Products}/>
                <Route path="/Product" component={Product}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Confirm" component={Confirm}/>
                <Route path="/confirm_token/:token" component={SuccessConfirm}/>  
                <Route path="/Account" component={Account}/>
                <Route path="/ForgotPassword" component={ForgotPassword}/>
                <Route path="/ResetPassword" component={ResetPassword}/>
                <Route path="/Cart" component={Cart}/>
                <Route path="/Careers" component={Careers}/>
                <Route path="/Customers" component={Customers}/>
                <Route path="/FAQ" component={FAQ}/>
                <Route path="/Partners" component={Partners}/>
                <Route path="/Testimonials" component={Testimonials}/>
                <Route path="/Search" component={Search}/>
                <Route path="/Home" component={Home}/>
                <Route path="/" component={Home}/>
            </Switch>
            </NavContext.Provider>
        </UserContext.Provider>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
