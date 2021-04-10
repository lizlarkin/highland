import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import VME from './Pages/Category/VME';
import Digital_Delay_Generators from './Pages/Category/Digital_Delay_Generators';
import Waveform_Generators from './Pages/Category/Waveform_Generators';
import Laser_Drivers from './Pages/Category/Laser_Drivers';
import Photonics from './Pages/Category/Photonics';
import Measurement_Simulation from './Pages/Category/Measurement_Simulation';
import OEM_Embedded from './Pages/Category/OEM_Embedded';
import Products from './Pages/Category/Products';
import Product from './Pages/Product/Product';
import Register from './Pages/Register/Register';
import Footer from './Components/Footer/Footer';

function App() {

  const checkLoggedIn = () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
  }

  useEffect(() => {
    checkLoggedIn();
  }, [])


  return (
    <div className="App">
      <HashRouter>

      <Navigation />

      <Switch>
          <Route path="/Pages/Category/VME" component={VME}/>
          <Route path="/Pages/Category/Digital_Delay_Generators" component={Digital_Delay_Generators}/>
          <Route path="/Pages/Category/Waveform_Generators" component={Waveform_Generators}/>
          <Route path="/Pages/Category/Laser_Drivers" component={Laser_Drivers}/>
          <Route path="/Pages/Category/Photonics" component={Photonics}/>
          <Route path="/Pages/Category/Measurement_Simulation" component={Measurement_Simulation}/>
          <Route path="/Pages/Category/OEM_Embedded" component={OEM_Embedded}/>
          <Route path="/Pages/Category/Products" component={Products}/>
          <Route path="/Pages/Product/Product" component={Product}/>
          <Route path="/Pages/About" component={About}/>
          <Route path="/Pages/Contact" component={Contact}/>
          <Route path="/Pages/Login" component={Login}/>
          <Route path="/Pages/Register" component={Register}/>
          <Route path="/Pages/Home" component={Home}/>
      </Switch>

      <Footer />

      </HashRouter>
    </div>
  );
}

export default App;
