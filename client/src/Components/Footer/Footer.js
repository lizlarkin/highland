import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
    return (
        <footer>
            <div class = "row navbar navbar-dark bg-dark hti-footer">
                <div class = "col-md-2">
                    Instagram
                </div>
                <div class = "col-md-8">
                    <div class = "row">
                        <div class = "col-md-12">
                            <ul class="nav justify-content-center navbar navbar-dark bg-dark hti-footer">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Customers</a>
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
                    LinkedIn
                </div>
            </div>

        </footer>

/* <div class = "row">
<div class = "col-md-12">
    <ul class="nav justify-content-center navbar navbar-dark bg-dark hti-footer">
        <li class="nav-item">
            <a class="nav-link" href="#">Instagram</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Customers</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Partners</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Testimonials</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">LinkedIn</a>
        </li>
    </ul>
</div>
</div>
<div class = "row nav justify-content-center navbar navbar-dark bg-dark hti-footer">
<div class = "col-md-12">
    <p>&copy;2021 Highland Technology, Inc. </p>
</div>
</div> */
    )
}

export default Footer
