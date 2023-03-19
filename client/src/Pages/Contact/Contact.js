import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../Context/UserContext";
import axios from "axios";
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';

// TO DO:
//     (1) better Map
//     (2) keep contact history in account section
//     (3) associate quote activity with contact activity

const Contact = () => {

    const { userData } = useContext(UserContext);
    const [validate, setValidate] = useState(false);
    const [errMsg, setErrMsg] = useState();

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
        submitBtn: {
            width: "40%"
        },
        submitRow: {
            marginTop: "3%",
        },
        contactLink: {
            textDecoration: "none",
        }
    }
 
    const [form, setForm] = useState({
        subject: "",
        org: "",
        first: "",
        last: "",
        email: "",
        phone: "",
        comments: "",
        sn: "",
        model: "",
        dash: "",
    })

    // Store input fields
    const storeInputs = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    // Store subject field
    const storeInquiry = (e) => {
        const typeOfInquiry = e.target.value;
        setForm({...form, subject: typeOfInquiry})
    }

    // Front end check for missing fields that are required
    const checkFields = () => {
        if (!form.org || !form.first || !form.last || !form.email || !form.phone || !form.subject || form.subject==="Choose Topic") {
            setValidate(true);
        } else {
            setValidate(false);
        }
    };

    // Save data to backend if missing fields aren't present
    const saveContact = async (e) => {
        e.preventDefault() 
        checkFields();
        try {
            // const authToken = localStorage.getItem("auth-token");
            await axios.post("/contact", 
            form, );
            clearFields();
            setErrMsg();
            // { headers: { "x-auth-token": authToken },}
        } catch (error) {
            // if missing fields are present, give feedback to user
            setErrMsg(error.response.data.msg);
            }; 
        };

    const clearFields = () => {
        var elements = document.getElementsByTagName("input");
            for (var i=0; i < elements.length; i++) {
            if (elements[i].type === "text" || elements[i].type === "email") {
                elements[i].value = "";
                }
            }
        document.querySelector('textarea[name="comments"]').value = "";
        document.getElementById("inputState").selectedIndex = 0;
        setForm({
            subject: "",
            org: "",
            first: "",
            last: "",
            email: "",
            phone: "",
            comments: "",
            sn: "",
            model: "",
            dash: "",
        })
    }

    useEffect(() => {
        setForm({
            org: userData.token===undefined?"":userData.user.org,
            first: userData.token===undefined?"":userData.user.first,
            last: userData.token===undefined?"":userData.user.last,
            email: userData.token===undefined?"":userData.user.email,
            phone: userData.token===undefined?"":userData.user.phone,
        })
    }, [userData]) 

    return (
        <div>
            <div>
                <GenJumbo />
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4" style={contactStyles.center}>
                    <h3 style={contactStyles.marginTop}>
                        Highland Technology, Inc. <br/>
                        650 Potrero Avenue <br/>
                        San Francisco, CA 94110
                    </h3>
                    <iframe style={contactStyles.marginTop} title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2284416618477!2d-122.40971458440767!3d37.76124142071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e36aea97f39%3A0xb673fe2c81d7469a!2s650%20Potrero%20Ave%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1628270460304!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
                    <h4 style={contactStyles.marginTop}>
                        <i className="fa-regular fa-phone"></i> <br />
                        (415) 551-1700 
                    </h4>
                    <h4 style={contactStyles.marginTop}>
                        <i className="fa-regular fa-fax"></i> <br />
                         (415) 551-5129
                    </h4>
                    <h4 style={contactStyles.marginTop}>
                        <i class="fa-regular fa-envelope"></i> <br />
                            <a href="mailto: sales@highlandtechnology.com" style={contactStyles.contactLink}>Email Sales</a> <br />
                            <a href="mailto: engineering@highlandtechnology.com" style={contactStyles.contactLink}>Email Engineering</a>
                    </h4>
                </div>
                <div className="col-md-6" style={contactStyles.marginTop}>
                    <form className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Organization<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Organization" name="org" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.org} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">First Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="First Name" name="first" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.first} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Last Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Last Name" name="last" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.last} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="email" className="form-control" placeholder="Email" name="email" required/>
                            :<input type="email" className="form-control" placeholder={userData.user.email} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Phone<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="phone" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="form-control" placeholder="Phone" name="phone" required/>
                            :<input type="phone" className="form-control" placeholder={userData.user.phone} disabled/>
                            }
                        </div>
                        <div className="col-md-12">                           
                            <label htmlFor="inputState" className="form-label">Subject of Inquiry<span className="asterisk">*</span></label>
                            <select onChange={storeInquiry} id="inputState" className="form-select">
                                <option defaultValue>Choose Topic</option>
                                <option>Technical Inquiry</option>
                                <option>Sales Inquiry</option>
                                <option>RMA Request (Repair/Calibration Services)</option>
                                <option>Other</option>
                            </select>
                        </div>
                        {form.subject==="RMA Request (Repair/Calibration Services)"?
                        <div className="row">
                            <p style={contactStyles.marginTop}>Please provide as much information as possible about unit pending return:</p>
                            <div className="col-md-4">
                                <label  className="form-label">Serial Number</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="1234" name="sn"/>
                            </div>
                            <div className="col-md-4">
                                <label  className="form-label">Model</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="T560" name="model"/>
                            </div>
                            <div className="col-md-4">
                                <label  className="form-label">Version</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="-2" name="dash"/>
                            </div>
                        </div>
                        :null}
                        <div className="col-md-12">
                            <label htmlFor="inputState" className="form-label">{form.subject==="RMA Request (Repair/Calibration Services)"?"Reason for Return":"Comments"}</label>
                            <div className="input-group">
                                <textarea onChange={storeInputs} className="form-control" aria-label="With textarea" name="comments"></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12" style={contactStyles.submitRow}>
                                <button onClick={saveContact} style={contactStyles.submitBtn} type="submit" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Submit</button>
                            
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">{validate?"Please try again":"Thank you"}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {validate?
                                            <div className="alert alert-danger" role="alert">
                                                {errMsg} 
                                            </div>
                                        :
                                            <div className="alert alert-success" role="alert">
                                                Your request has been received. A member of our team will respond shortly. 
                                            </div>
                                        }
                                    </div>
                                    <div className="modal-footer">   
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-md-1" style={contactStyles.marginBottom}></div>

            </div>
        </div>
    )
}

export default Contact
