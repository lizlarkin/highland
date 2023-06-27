import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import highlandLogo from './logo.png';
import UserContext from "../../Context/UserContext";
import NavContext from "../../Context/NavContext";
import { useHistory } from "react-router-dom";

const Navigation = (props) => {

  const  { userData }  = useContext(UserContext);
  const  { cartQuantity }  = useContext(NavContext);
  const history = useHistory();

  const navigationStyles = {
    navBar: {
      height: "100px"
    },
    logo: {
        marginLeft: "25px",
        position: "absolute",
        top: "0px",
    },
    firstLink: {
      marginLeft: "275px",
    },
    links: {
        fontWeight: "bold",
        marginLeft: "40px",
    },
  }

    const goToCategory = (e) => {
      const categorySelected = e.target.title;
      history.push(`/Category/${categorySelected}`)
    }

    useEffect(() => {
    }, [props])
    
    
    return (
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={navigationStyles.navBar}>
          <div className="container-fluid" >
                    <Link to="/Home" className="navbar-brand">
                        <img src={highlandLogo} style={navigationStyles.logo} alt="Highland Logo"/>
                    </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={navigationStyles.firstLink}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={navigationStyles.links}>All Products</div>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li onClick={goToCategory} title={"VME"} className="dropdown-item">VME</li> 
                    <li onClick={goToCategory} title={"DDG"} className="dropdown-item">Digital Delay Generators</li>
                    <li onClick={goToCategory} title={"PSG"} className="dropdown-item">Pulse Generators</li>
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
                  {userData.user ? <Link to="/Cart" className="nav-link active" style={navigationStyles.links}>
                    <i className="fas fa-shopping-cart"></i><span className="badge bg-light text-dark">
                      {cartQuantity>0?" ("+cartQuantity+")":null}
                      </span>
                  </Link> 
                  : null }
                </li>
              </ul>
              <form className="d-flex">
                <div className="gcse-searchbox-only" data-resultsurl="/Search"></div>
              </form>
            </div>
          </div>
        </nav>
        </nav>
    )
}

export default Navigation
