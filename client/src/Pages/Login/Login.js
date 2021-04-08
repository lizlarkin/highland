import React from 'react'
import './formStyles.css';

const Login = () => {

    return (
        <div>
            <h1 class = "form-heading">Login</h1>
            {/* <form onSubmit={(e) => {
                e.preventDefault();
                console.log('hiform');
            }}
            >
                <label>Email</label>
                <input type="text" name="email"></input>
                <label>Password</label>
                <input type="text" name="password"></input>
                <input type="submit"></input>
            </form> */}
            <div class ="row">
                <div class="col-md-4"></div>
                <div class ="col-md-4 form-box">
                    <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('testfromloginform')
                    }}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group form-input">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password"/>
                    </div>
                    <button type="submit" class="btn btn-primary form-input">Submit</button>
                    </form>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    )
}

export default Login
