import React from 'react';
import { Redirect } from 'react-router-dom'
import './login.css'
import CustomError from '../Error/Error'
var loginBusiness = require('./loginBusiness');
var SessionStorageUtil = require('../../Utils/SessionStorageUtil')


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginError: '',
            userLoggedIn: SessionStorageUtil.getItemFromSession('userLoggedIn'),
            userName: ''
        }
        this.Login_Function = this.Login_Function.bind(this);
    }

    Login_Function(event) {
        event.preventDefault();
        var formData = {
            userName: event.target.username.value,
            password: event.target.password.value
        };

        loginBusiness.signOn(formData, (err, resp) => {
            if (err) {
                console.log(JSON.stringify(err.stack));
                console.log(err.message);
                if (err.message && err.message !== '') {
                    this.setState({
                        loginError: err.message,
                        userLoggedIn: false
                    });
                }
            } else {
                console.log("redirect");
                SessionStorageUtil.storeItemsInSesssion('userLoggedIn', true)
                this.setState({
                    userLoggedIn: true,
                    userName: formData.username
                });
            }
        });

        return false;

    }

    render() {
        const { userLoggedIn } = this.state;

        if (userLoggedIn) {
            console.log('redirecting')
            return <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { userName: 'Gowtham' }
                }}
            />
        } else {
            return (

                <div className="loginContainer" id="loginpage">

                    <center >
                        <h2 className="logintitle"><span>React Banking Portal</span></h2>
                    </center>
                    <div className="login-page">
                        <div className="form">
                            <div className="login-form">
                                {this.state.loginError ? <CustomError /> : 'Login'}
                                <div id="error_msg"></div>
                                <form id="login-form" action="#" method="POST" onSubmit={this.Login_Function}>
                                    <input type="text" placeholder="Username" id="username" />
                                    <input type="password" placeholder="Password" id="password" />
                                    <button className="formButton">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }
    }
}

export default LoginPage;