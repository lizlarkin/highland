import React, { useState } from 'react';
import axios from 'axios';
import "../Login/formStyles.css"

const ResetPassword = (props) => {

  const [pass, setPass] = useState();

  const [errMsg, setErrMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  // Collect Inputs from Forms and set to State
    const onChange = (e) => {
      setPass({...pass, [e.target.name]: e.target.value});
    }

    // Show and hide password
    const [showPass, setShowPass] = useState(false);
    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const [showCheckPass, setShowCheckPass] = useState(false);
    const toggleShowCheckPass = () => {
        setShowCheckPass(!showCheckPass)
    }

    // Function to save new password
    const savePass = async (e) => {
      e.preventDefault();
      try {
          setErrMsg();
          const token = props.match.params.token
          await axios.put(`/users/resetPass`, {token: token, pass: pass});
          setSuccessMsg("Password successfully reset.");
          } catch (error) {
            setSuccessMsg();
            setErrMsg(error.response.data.msg);
          }
      }

  return (
    <div>
      <h1 className = "form-heading">Reset Password</h1>

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
      null
      }

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
      null
      }

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 form-box">
          <div className="form-group form-input">
            <label htmlFor="inputPassword8" className="form-label">Password<span className="asterisk">*</span></label>
            <input onChange={onChange} type={showPass?"text":"password"} className="form-control" id="password-input" placeholder="8 characters minimum" name="pass" minLength="8"/>
            <i onClick={toggleShowPass} className="fa-duotone fa-eye-slash pass-eye"></i>
          </div>
          <div className="form-group form-input">
            <label htmlFor="inputPassword8" className="form-label">Re-enter Password<span className="asterisk">*</span></label>
            <input onChange={onChange} type={showCheckPass?"text":"password"} className="form-control" id="check-input" name="passCheck" minLength="8" placeholder="8 characters minimum"/>
            <i onClick={toggleShowCheckPass} className="fa-duotone fa-eye-slash pass-eye"></i>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button onClick={savePass} type="submit" className="btn btn-primary form-input submit-btn">Reset Password</button>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

    </div>
  )
}

export default ResetPassword