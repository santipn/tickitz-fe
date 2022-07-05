import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/style.css'


export default class signIn extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Sign In Page</title>
                    <link href="https://fonts.googleapis.com/css?family=Mulish" rel="stylesheet" />
                    {/* Bootstrap CSS */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
                    {/* Font Awesome CSS */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
                    <link rel="stylesheet" href="css/style.css" />
                    <div className="wrapper">
                        <div className="sct brand">
                            <img src="image/spiderman.png" />
                            <div className="image">
                                <img src="image/signuptickitz.svg" />
                            </div>
                            <div className="image-text">
                                <p>wait,watch,wow!</p>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="container">
                                <h3><strong>Sign In</strong></h3>
                                <p>Sign in with your data that you entered during your registration</p>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <form className="form-horizontal" method action>
                                            <div className="form-group">
                                                <label className="control-label">Email</label>
                                                <input type="email" className="form-control" name="email" defaultValue placeholder="Write your email" />
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label">Password</label>
                                                <input id="password-field" type="password" className="form-control" name="password" defaultValue="secret" placeholder="Write your password" />
                                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                            </div>
                                            <div className="form-group">
                                                <div className=" button "><button className="send_btn ">Sign In</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <p align="center">Forgot your password ? <Link to={"resetPassword.js"}>Reset Now</Link></p>
                                    <p align="center">Don't have account ? <Link to={"signUp.js"}>Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}