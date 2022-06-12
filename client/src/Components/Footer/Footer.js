import React from 'react';
import {Link} from 'react-router-dom';
import "./FooterStyles.css";
import highlandHills from "./Images/Highland_logo_white.png";


const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer>
            {/* <div className = "row footer-space">
                <div className = "col-md-12"></div>
            </div> */}
            <div className = "row navbar navbar-dark bg-dark hti-footer">
                <div className="col-md-1"></div>
                <div className = "col-md-2">
                    <a href ="/"><img src={highlandHills} className="img-fluid" alt="Highland Logo"/></a>
                </div>
                <div className = "col-md-6">
                    <div className = "row">
                        <div className = "col-md-12">
                            <ul className="nav justify-content-center navbar navbar-dark bg-dark">
                                <li className="nav-item">
                                    <Link to="/Careers" className="nav-link">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Customers" className="nav-link">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/FAQ" className="nav-link">FAQs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Partners" className="nav-link">Partners</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Testimonials" className="nav-link">Testimonials</Link>
                                </li>
                            </ul>
                        </div>    
                    </div>
                    <div className = "row">
                        <div className = "col-md-12">
                            &copy; {year} Highland Technology, Inc.
                        </div>    
                    </div>
                </div>
                <div className = "col-md-2">
                        <a href="https://instagram.com/highlandtechnology?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram fa-2x socialMedia"></i></a>
                        <a href="https://m.facebook.com/Highland-Technology-108301345160326/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f fa-2x socialMedia"></i></a>
                        <a href="https://www.linkedin.com/company/highlandtechnology/.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-2x socialMedia"></i></a>
                </div>
                <div className="col-md-1"></div>
            </div>

        </footer>
    )
}

export default Footer
