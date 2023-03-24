import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {

    const [email, setEmail] = useState();
    const [errMsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();

    const storeEmail = (e) => {
        setEmail({...email, email: e.target.value})
    };

    const submitEmail = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/users/forgotPass", email);
            setSuccessMsg('Password reset link sent.')
        } catch (error) {
            setErrMsg(error.response.data.msg)
        }
    };



  return (
    <div>
        <h1 className = "form-heading">Forgot Password</h1>
            
            {errMsg?
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <div className="alert alert-danger error-alert" role="alert">
                        {errMsg}
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            :
            null}
            
            {successMsg?
            <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <div className="alert alert-success error-alert" role="alert">
                        {successMsg}
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            :
            null}
            
        <div className ="row">
            <div className="col-md-4"></div>
            <div className ="col-md-4 form-box">
                <form onSubmit={submitEmail}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter email address to reset password</label>
                        <input onChange={storeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary form-input submit-btn">Submit</button>
                        </div>
                    </div>
                    </form>

                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
  )
}

export default ForgotPassword