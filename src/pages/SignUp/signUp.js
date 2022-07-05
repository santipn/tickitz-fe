import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import './signup.css'

export default class signUp extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="sct brand">
                        <img src="image/spiderman.png" />
                        <div className="image">
                            <img src="image/signuptickitz.svg" />
                        </div>
                        <div className="image-text">
                            <p>Wait, Watch, Wow!</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="container">
                            <h3><strong>Sign Up</strong></h3>
                            <p>Fill your additional details</p>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form className="form-horizontal" method action>
                                        <div className="form-group">
                                            <label className="control-label">First Name</label>
                                            <input type="text" className="form-control" name="firstname" defaultValue placeholder="Write your first name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Last Name</label>
                                            <input type="text" className="form-control" name="lastname" defaultValue placeholder="Write your last name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Phone Number</label>
                                            <input type="text" className="form-control" name="phone" defaultValue placeholder="Write your phone number" />
                                        </div>
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
                                            <div className=" button "><button className="send_btn ">Sign Up</button></div>
                                        </div>
                                    </form>
                                </div>
                                <p align="center">Already have account ? <Link to={"signIn.js"}>Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                    {/*end login*/}
                </div>
      </React.Fragment >
    )
    }
}
