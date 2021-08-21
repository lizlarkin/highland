import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
import Account from './Pages/Account/Account';
import Cart from './Pages/Cart/Cart';
import Category from './Pages/Category/Category';
import Careers from './Pages/Careers/Careers';
import Customers from './Pages/Customers/Customers';
import FAQ from './Pages/FAQ/FAQ';
import Partners from './Pages/Partners/Partners';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {

  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

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
      setUserData({ token, user: userRes.data })

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

  useEffect(() => {
    checkLoggedIn();
  }, [])


  return (
    <div className="App">
      <HashRouter>

        {/* {!userData.user ? 
        <> 
        <Link to = "/Pages/Login">Login</Link> 
        <Link to = "/Pages/Register">Register</Link> 
        </> 
        : 
        <>
        <Link to = "/Pages/Account">Account</Link>
        <Link to = "/" onClick={logout}>Logout</Link>
        </>
        } */}

        <UserContext.Provider value = {{ userData, setUserData }}>
          <Navigation logout={logout}/>

          <Switch>
              <Route path="/Pages/Category/Category" component={Category}/>
              <Route path="/Pages/Category/Products" component={Products}/>
              <Route path="/Pages/Product/Product" component={Product}/>
              <Route path="/Pages/About" component={About}/>
              <Route path="/Pages/Contact" component={Contact}/>
              <Route path="/Pages/Login" component={Login}/>
              <Route path="/Pages/Register" component={Register}/>
              <Route path="/Pages/Account" component={Account}/>
              <Route path="/Pages/Cart" component={Cart}/>
              <Route path="/Pages/Careers" component={Careers}/>
              <Route path="/Pages/Customers" component={Customers}/>
              <Route path="/Pages/FAQ" component={FAQ}/>
              <Route path="/Pages/Partners" component={Partners}/>
              <Route path="/Pages/Testimonials" component={Testimonials}/>
              <Route path="/Pages/Home" component={Home}/>
          </Switch>
        </UserContext.Provider>

      <Footer />

      </HashRouter>
    </div>
  );
}

export default App;
