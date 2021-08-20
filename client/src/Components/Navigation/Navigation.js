import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import highlandLogo from './logo.png';
import UserContext from "../../Context/UserContext";

const Navigation = (props) => {

  const  { userData }  = useContext(UserContext);

  const navigationStyles = {
    logo: {
        marginLeft: "30px",
    },
    links: {
        fontWeight: "bold",
        marginLeft: "40px",
    },
}

    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid" >
                    <Link to="/Pages/Home" className="navbar-brand">
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
                    <li><Link to="/Pages/Category/VME" className="dropdown-item">VME</Link></li> 
                    <li><Link to="/Pages/Category/Digital_Delay_Generators" className="dropdown-item">Delay/Pulse Generators</Link></li>
                    <li><Link to="/Pages/Category/Waveform_Generators" className="dropdown-item">Waveform Generators</Link></li> 
                    <li><Link to="/Pages/Category/Laser_Drivers" className="dropdown-item">Laser Drivers/Controllers</Link></li>
                    <li><Link to="/Pages/Category/Photonics" className="dropdown-item">Photonics</Link></li>
                    <li><Link to="/Pages/Category/Measurement_Simulation" className="dropdown-item">Measurement/Simulation</Link></li>
                    <li><Link to="/Pages/Category/OEM_Embedded" className="dropdown-item">OEM/Embedded</Link></li>
                    <li><Link to="/Pages/Category/Legacy" className="dropdown-item">Legacy</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link to="/Pages/Category/Products" className="dropdown-item">All Products</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/Pages/About" className="nav-link active" style={navigationStyles.links}>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Pages/Contact" className="nav-link active" style={navigationStyles.links}>Contact</Link>
                </li>
                <li className="nav-item">
                  {userData.user ? <Link to="/Pages/Account" className="nav-link active" style={navigationStyles.links}>Account</Link> : <Link to = "/Pages/Register" className="nav-link active" style={navigationStyles.links}>Register</Link> }
                </li>
                <li className="nav-item">
                  {!userData.user ? <Link to="/Pages/Login" className="nav-link active" style={navigationStyles.links}>Login</Link> : <Link to = "/Pages/Login" onClick={props.logout} className="nav-link active" style={navigationStyles.links}>Logout</Link> }
                </li>
                <li className="nav-item">
                  {userData.user ? <Link to="/Pages/Cart" className="nav-link active" style={navigationStyles.links}><i class="fas fa-shopping-cart"></i></Link> : null }
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
