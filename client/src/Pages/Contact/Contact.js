import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../Context/UserContext";
import { DateContext } from "../../Context/DateContext";
import axios from "axios";
import CategoryJumbotron from '../../Components/CategoryJumbotron/CategoryJumbotron';

const Contact = () => {

    const { userData } = useContext(UserContext);
    const { dateNow } = useContext(DateContext);

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

    const [form, setForm] = useState({
        date: dateNow,
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
        if (form.subject==="Choose Topic" || form.subject==="") {
            alert("Please select a topic.")
        } else if (form.organization==="" || form.firstName==="" || form.lastName==="" || form.email==="" || form.phone==="") {
            alert("Please fill in all fields.")
        } else {
        try {
            // const authToken = localStorage.getItem("auth-token");
            const saveContact = await axios.post("/contact", 
            form, 
            // { headers: { "x-auth-token": authToken },}
          ); 
           console.log("save contact", saveContact) 
        } catch (error) {
        console.log("error saving contact: ", error)
            }   
        }
    }

    const clearFields = () => {
        alert('make this clear form fields')
    }

    useEffect(() => {
        setForm({
            organization: userData.token===undefined?"":userData.user.organization,
            firstName: userData.token===undefined?"":userData.user.firstName,
            lastName: userData.token===undefined?"":userData.user.lastName,
            email: userData.token===undefined?"":userData.user.email,
            phone: userData.token===undefined?"":userData.user.phone,
        })
    }, [userData]) 

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
                    <iframe style={contactStyles.marginTop} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2284416618477!2d-122.40971458440767!3d37.76124142071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e36aea97f39%3A0xb673fe2c81d7469a!2s650%20Potrero%20Ave%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1628270460304!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
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
                            <label className="form-label">Organization<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Organization" name="organization"/>
                            :<input type="text" className="form-control" placeholder={userData.user.organization} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">First Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="First Name" name="firstName"/>
                            :<input type="text" className="form-control" placeholder={userData.user.firstName} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Last Name<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="text" className="form-control" placeholder="Last Name" name="lastName"/>
                            :<input type="text" className="form-control" placeholder={userData.user.lastName} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="email" className="form-control" placeholder="Email" name="email"/>
                            :<input type="email" className="form-control" placeholder={userData.user.email} disabled/>
                            }
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Phone<span className="asterisk">*</span></label>
                            {userData.token===undefined?
                            <input onChange={storeInputs} type="phone" className="form-control" placeholder="Phone" name="phone"/>
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
                        <div className="col-4">
                            <button type="submit" className="btn btn-outline-danger" onClick={saveContact}>Submit</button>
                            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Thank you!</h5>
                                    </div>
                                    <div className="modal-body">
                                        Your {form.subject} request has been received. A member of our team will respond shortly. 
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={clearFields} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </form>
                </div>

                <div className="col-md-1" style={contactStyles.marginBottom}></div>
            </div>
        </div>
    )
}

export default Contact
