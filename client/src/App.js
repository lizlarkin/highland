import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
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
import Confirm from './Pages/Confirm/Confirm';
import SuccessConfirm from './Pages/Confirm/SuccessConfirm';
import { DateContext } from './Context/DateContext';

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

      console.log("user result:", userRes);
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
    refreshDate();
  }, [])

  const [dateNow, setDateNow] = useState();

  const refreshDate = () => {
    let date = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let newDate =
      date.getDate() +
      "-" +
      monthNames[date.getMonth()] +
      "-" +
      date.getFullYear()+
      " "+
      date.getHours()+
      ":"+
      date.getMinutes().toString().padStart(2, "0");
      ;
      setDateNow(newDate)
      console.log('newdate from app', newDate)
      console.log('dateNow from app', dateNow)
  }


  //provider value can only change if the set value changes
  // const dateValue = useMemo(
  //   () => ({ dateNow, setDateNow }),
  //   [dateNow, setDateNow]
  // );

  return (
    <div className="App">
      <BrowserRouter>

        <UserContext.Provider value = {{ userData, setUserData, incrementQuoteNum }}>
          <DateContext.Provider value={{ dateNow, refreshDate }}>
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
                <Route path="/Cart" component={Cart}/>
                <Route path="/Careers" component={Careers}/>
                <Route path="/Customers" component={Customers}/>
                <Route path="/FAQ" component={FAQ}/>
                <Route path="/Partners" component={Partners}/>
                <Route path="/Testimonials" component={Testimonials}/>
                <Route path="/Home" component={Home}/>
            </Switch>
          </DateContext.Provider>
        </UserContext.Provider>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
