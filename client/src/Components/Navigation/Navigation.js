import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import highlandLogo from './logo.png';
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Navigation = (props) => {

  const  { userData }  = useContext(UserContext);
  const history = useHistory();

  const navigationStyles = {
    logo: {
        marginLeft: "30px",
    },
    links: {
        fontWeight: "bold",
        marginLeft: "40px",
    },
  }

  const [cartQuantity, setCartQuantity] = useState();

  const getCartQuantity = async () => {
    try {
        const quantityAggregate = await axios.get(`/cart/quantity`, {
          headers: { "x-auth-token": localStorage.getItem("auth-token") }
      });
        // console.log("AGG HERE!", quantityAggregate.data[0].sum)
        setCartQuantity(quantityAggregate.data[0].sum)
    } catch (error) {
        console.log("error getting cart quantity", error)   
    }
}

    const goToCategory = (e) => {
      const categorySelected = e.target.title;
      history.push(`/Category/${categorySelected}`)
    }

    useEffect(() => {
      getCartQuantity();
    }, [userData.user])

    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid" >
                    <Link to="/Home" className="navbar-brand">
                        <img src={highlandLogo} style={navigationStyles.logo} alt="Highland Logo"/>
                    </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navigationStyles.links}>All Products</Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li onClick={goToCategory} title={"VME"} className="dropdown-item">VME</li> 
                    <li onClick={goToCategory} title={"DDG"} className="dropdown-item">Delay/Pulse Generators</li>
                    <li onClick={goToCategory} title={"WFG"} className="dropdown-item">Waveform Generators</li> 
                    <li onClick={goToCategory} title={"LDC"} className="dropdown-item">Laser Drivers/Controllers</li>
                    <li onClick={goToCategory} title={"PHO"} className="dropdown-item">Photonics</li>
                    <li onClick={goToCategory} title={"MAS"} className="dropdown-item">Measurement/Simulation</li>
                    <li onClick={goToCategory} title={"OEM"} className="dropdown-item">OEM/Embedded</li>
                    <li onClick={goToCategory} title={"LEG"} className="dropdown-item">Legacy</li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link to="/Products" className="dropdown-item">All Products</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link active" style={navigationStyles.links}>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link active" style={navigationStyles.links}>Contact</Link>
                </li>
                <li className="nav-item">
                  {userData.user ? <Link to="/Account" className="nav-link active" style={navigationStyles.links}>Account</Link> : <Link to = "/Register" className="nav-link active" style={navigationStyles.links}>Register</Link> }
                </li>
                <li className="nav-item">
                  {!userData.user ? <Link to="/Login" className="nav-link active" style={navigationStyles.links}>Login</Link> : <Link to = "/Login" onClick={props.logout} className="nav-link active" style={navigationStyles.links}>Logout</Link> }
                </li>
                <li className="nav-item">
                  {userData.user ? <Link to="/Cart" className="nav-link active" style={navigationStyles.links}><i className="fas fa-shopping-cart"></i>{cartQuantity>0?" ("+cartQuantity+")":null}</Link> : null }
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit"><i className="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </nav>
        </nav>
    )
}

export default Navigation
