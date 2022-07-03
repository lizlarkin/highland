import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../Context/UserContext";
import axios from "axios";
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';

// TO DO:
//     (1) better Map
//     (2) keep contact history in account section
//     (3) change auth to no-reply
//     (4) page reset uses location.window.reload() - find something more sophisticated
//     (5) change internal send to sales@
//     (6) contact db will grow too large


const Contact = () => {

    const { userData } = useContext(UserContext);

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
        warning: {
            marginLeft: "2%",
            color: "#D0342C",
        },
        contactLink: {
            textDecoration: "none",
        }
    }
 
    const [form, setForm] = useState({
        subject: "",
        organization: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
        serialNum: "",
        model: "",
        version: "",
    })

    const storeInputs = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const storeInquiry = (e) => {
        const typeOfInquiry = e.target.value;
        setForm({...form, subject: typeOfInquiry})
    }

    const saveContact = async (e) => {
        e.preventDefault();
        try {
            // const authToken = localStorage.getItem("auth-token");
            await axios.post("/contact", 
            form, 
            // { headers: { "x-auth-token": authToken },}
        ); 
        } catch (error) {
        console.log("error saving contact: ", error)
            }   
        }
    // }

    const clearFields = () => {
        var elements = document.getElementsByTagName("input");
            for (var i=0; i < elements.length; i++) {
            if (elements[i].type === "text" || elements[i].type === "email") {
                elements[i].value = "";
                }
            }
        document.querySelector('textarea[name="comments"]').value = "";
        document.getElementById("inputState").selectedIndex = 0;
        window.location.reload()
    }

    useEffect(() => {
        setForm({
            // date: dateNow,
            organization: userData.token===undefined?"":userData.user.organization,
            firstName: userData.token===undefined?"":userData.user.firstName,
            lastName: userData.token===undefined?"":userData.user.lastName,
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
                    <iframe style={contactStyles.marginTop} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2284416618477!2d-122.40971458440767!3d37.76124142071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e36aea97f39%3A0xb673fe2c81d7469a!2s650%20Potrero%20Ave%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1628270460304!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
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
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Organization" name="organization" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.organization} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">First Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="First Name" name="firstName" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.firstName} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Last Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Last Name" name="lastName" required/>
                            :<input type="text" className="form-control" placeholder={userData.user.lastName} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="email" className="form-control" placeholder="Email" name="email" required/>
                            :<input type="email" className="form-control" placeholder={userData.user.email} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Phone<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="phone" pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" className="form-control" placeholder="Phone" name="phone" required/>
                            :<input type="phone" className="form-control" placeholder={userData.user.phone} disabled/>
                            }
                        </div>
                        <div className="col-md-12">                           
                            <label for="inputState" className="form-label">Subject of Inquiry<span className="asterisk">*</span></label>
                            <select onChange={storeInquiry} id="inputState" className="form-select">
                            <option selected>Choose Topic</option>
                            <option>Technical Inquiry</option>
                            <option>Sales Inquiry</option>
                            <option>RMA Request</option>
                            <option>Other</option>
                            </select>
                        </div>
                        {form.subject==="RMA Request"?
                        <div className="row">
                            <p style={contactStyles.marginTop}>Please provide as much information as possible about unit pending return:</p>
                            <div className="col-md-4">
                                <label  className="form-label">Serial Number</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="1234" name="serialNum"/>
                            </div>
                            <div className="col-md-4">
                                <label  className="form-label">Model</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="T560" name="model"/>
                            </div>
                            <div className="col-md-4">
                                <label  className="form-label">Version</label>
                                <input onChange={storeInputs} type="text" className="form-control" placeholder="-2" name="version"/>
                            </div>
                        </div>
                        :null}
                        <div className="col-md-12">
                            <label for="inputState" className="form-label">Comments</label>
                            <div className="input-group">
                                <textarea onChange={storeInputs} className="form-control" aria-label="With textarea" name="comments"></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12" style={contactStyles.submitRow}>
                                {form.organization==="" || form.firstName==="" || form.lastName==="" || form.email==="" || form.phone===""?
                                <>
                                <button type="button" className="btn btn-outline-danger" style={contactStyles.submitBtn} disabled>Submit</button> 
                                <span style={contactStyles.warning}>Please enter all required fields.</span>
                                </>
                                :
                                form.subject==="Choose Topic" || !form.subject ?
                                <>
                                <button type="button" className="btn btn-outline-danger" style={contactStyles.submitBtn} disabled>Submit</button> 
                                <span style={contactStyles.warning}>Please select a topic.</span> 
                                </>
                                :
                                <button onClick={saveContact} style={contactStyles.submitBtn} type="submit" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Submit</button>
                                }
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Thank you!</h5>
                                        </div>
                                        <div className="modal-body">
                                            Your {form.subject==="Other"?"request":form.subject} has been received. A member of our team will respond shortly. 
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={clearFields} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
