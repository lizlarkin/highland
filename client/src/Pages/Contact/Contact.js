import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"; 
import UserContext from "../../Context/UserContext";
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const Contact = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();
    console.log(userData.user.firstName)

    const contactStyles={
        center: {
            textAlign: "center",
        },
        marginTop: {
            marginTop: "40px",
        },
        marginBottom: {
            marginBottom: "35%",
        },
    }
    return (
        <div>
            <CategoryJumbotron 
            title={"Contact Us"}
            text={"TBD content here"}/>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4" style={contactStyles.center}>
                    <h3 style={contactStyles.marginTop}>
                        Highland Technology, Inc. <br/>
                        650 Potrero Avenue <br/>
                        San Francisco, CA 94110
                    </h3>
                    <iframe style={contactStyles.marginTop} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2284416618477!2d-122.40971458440767!3d37.76124142071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e36aea97f39%3A0xb673fe2c81d7469a!2s650%20Potrero%20Ave%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1628270460304!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                    <h4 style={contactStyles.marginTop}>
                        T: (415) 551-1700 <br/>
                        F: (415) 551-5129
                    </h4>
                    <h4 style={contactStyles.marginTop}>Email</h4>
                    <h5>
                        <a>info@highlandtechnology.com</a> <br />
                        <a>sales@highlandtechnology.com</a> <br />
                        <a>engineering@highlandtechnology.com</a>
                    </h5>
                </div>
                <div className="col-md-6" style={contactStyles.marginTop}>
                    <form className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Company<span className="asterisk">*</span></label>
                            <input type="text" className="form-control" placeholder="Company"/>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">First Name<span className="asterisk">*</span></label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Last Name<span className="asterisk">*</span></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email<span className="asterisk">*</span></label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Phone<span className="asterisk">*</span></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label for="inputState" className="form-label">Subject of Inquiry<span className="asterisk">*</span></label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>Technical Inquiry</option>
                            <option>Sales Inquiry</option>
                            <option>RMA Request</option>
                            <option>Other</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label for="inputState" className="form-label">Comments</label>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-outline-danger">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-1" style={contactStyles.marginBottom}></div>
            </div>
        </div>
    )
}

export default Contact
