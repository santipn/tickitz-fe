import React, { Component } from 'react'
import '../../assets/css/style.css'
import './reset_password.css'

export default class resetPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Reset Password Page</title>
                    <link rel="stylesheet" href="css/reset_password.css" />
                    <link href="https://fonts.googleapis.com/css?family=Mulish" rel="stylesheet" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <div className="wrapper">
                        <div className="sct brand">
                            <img src="image/spiderman.png" />
                            <div className="image">
                                <img src="image/forgot_password-tickitz.svg" />
                            </div>
                            <div className="image-text">
                                <p>Lets reset your password</p>
                                <label>To be able to use your account again, please complete the following steps.</label>
                            </div>
                            <div className="left-side">
                                <ul className="progres_bar">
                                    <li>Fill your complete email</li>
                                    <li>Check your email</li>
                                    <li>Enter your new password</li>
                                    <li>Done</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="main active">
                                <div className="manage">
                                    <h2>Fill your complete email</h2>
                                    <p>we'll send a link to your email shortly</p>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <label>Email</label> <input type="text" className="writen_email" placeholder="write your email" />
                                    </div>
                                </div>
                                <div className="button step_1"><button className="next_btn">Send</button></div>
                            </div>
                            <div className="main">
                                <div className="manage">
                                    <h3>Fill your complete password</h3>
                                    <p>set your new password</p>
                                </div>
                                <div className="input_div">
                                    <div className="input_text">
                                        <label>Password</label><input className="pass_type" type="password" placeholder="Write your password" />
                                        <i className="fa fa-eye-slash password_eye" />
                                    </div>
                                    <div className="input_text">
                                        <label>Confirm Password</label>
                                        <input className="confirm_pass_type" type="password" placeholder="Write your confirm password" />
                                        <i className="fa fa-eye-slash con_eye" />
                                    </div>
                                    <div className="button step_2 m_top">
                                        <button className="sbmt_btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
