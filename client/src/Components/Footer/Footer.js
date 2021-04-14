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
                                    <a className="nav-link" href="#">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Partners</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testimonials</a>
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
