import React from 'react'
import {Link} from 'react-router-dom';
import "./FooterStyles.css"
import instagram from "./Images/instagram.png"
import linkedin from "./Images/linkedin.png"


const Footer = () => {
    return (
        <footer>
            {/* <div className = "row footer-space">
                <div className = "col-md-12"></div>
            </div> */}
            <div className = "row navbar navbar-dark bg-dark hti-footer">
                <div className = "col-md-2">
                    <Link to="/">
                        <img src={instagram} alt="Instagram"/>
                    </Link>
                </div>
                <div className = "col-md-8">
                    <div className = "row">
                        <div className = "col-md-12">
                            <ul className="nav justify-content-center navbar navbar-dark bg-dark">
                                <li className="nav-item">
                                    <Link to="/Pages/Careers" className="nav-link">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Pages/Customers" className="nav-link">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Pages/FAQ" className="nav-link">FAQs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Pages/Partners" className="nav-link">Partners</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Pages/Testimonials" className="nav-link">Testimonials</Link>
                                </li>
                            </ul>
                        </div>    
                    </div>
                    <div className = "row">
                        <div className = "col-md-12">
                            &copy; 2021 Highland Technology, Inc.
                        </div>    
                    </div>
                </div>
                <div className = "col-md-2">
                    <Link to="/">
                        <img src={linkedin} alt="LinkedIn"/>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
