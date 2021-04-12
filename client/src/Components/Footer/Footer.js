import React from 'react'
import {Link} from 'react-router-dom';
import "./FooterStyles.css"
import instagram from "./Images/instagram.png"
import linkedin from "./Images/linkedin.png"

const Footer = () => {
    return (
        <footer>
            <div class = "row navbar navbar-dark bg-dark hti-footer">
                <div class = "col-md-2">
                    <Link to="/">
                        <img src={instagram} alt="Instagram"/>
                    </Link>
                </div>
                <div class = "col-md-8">
                    <div class = "row">
                        <div class = "col-md-12">
                            <ul class="nav justify-content-center navbar navbar-dark bg-dark">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Customers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">FAQs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Partners</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Testimonials</a>
                                </li>
                            </ul>
                        </div>    
                    </div>
                    <div class = "row">
                        <div class = "col-md-12">
                            &copy; 2021 Highland Technology, Inc.
                        </div>    
                    </div>
                </div>
                <div class = "col-md-2">
                    <Link to="/">
                        <img src={linkedin} alt="LinkedIn"/>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
