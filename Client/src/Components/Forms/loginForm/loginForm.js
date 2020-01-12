import React, { Component } from 'react'
import './loginForm.css';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Loading from '../../pages/loading/loading'
import axios from 'axios'
import { loginUser } from '../../../Api/User.api';
import { login } from '../../../utils/loginHelper';

class LoginForm extends Component {
    state = {
        rederict: false,
        loaded: false,
        showed: false,
        errMessage: ' username or password is incorrect!!!',
        displayErr: 'none',
        displaylog: 'block',
        displayrecup: 'none',
        username: '',
        password: '',
        title: 'Welcome',
        targetUser: '',
        id: ""
    }
    //rederict to dashboard
    renderRedirect = () => {
        if (this.state.rederict) {
            return <Redirect to={'/redirect/' + this.state.id} />
        }
    }
    //get input changes --value--
    hundleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    //show hide login form
    hundleClick = (e) => {
        this.setState({ targetUser: e.target.getAttribute("name") });
        if (this.state.showed) {
            this.setState({
                showed: false
            })
        } else {
            this.setState({
                showed: true
            })
        }
    }

    //submit form
    hundleSubmit = async (e) => {
        console.log("targer =>", this.state.targetUser);
        e.preventDefault()
        const result = await loginUser(this.state.username, this.state.password);
        if (result.error) {
            console.log(result.error);
            this.setState({
                displayErr: 'block',
                errMessage: result.error.message
            });
            return;
        }
        console.log("result", result);
        if (result.data.ok === 1) {
            login(result.data);
            this.setState({ rederict: true });
            return;
        }
        this.setState({
            displayErr: 'block',
            errMessage: result.data.message
        });

        // if (err.response.status <= 400) {

        // }


    }

    //show email input to recive new password
    hundleForget = (e) => {
        this.setState({
            title: 'password reset',
            displaylog: 'none',
            displayrecup: 'block',
            displayErr: 'none'


        })
    }
    //return to login form
    hundleRetrun = () => {
        this.setState({
            title: 'Welcome',
            displayErr: 'none',
            displaylog: 'block',
            displayrecup: 'none',
            errMessage: ' username or password is incorrect!!!',
        })
    }
    //send email after verefication
    hundleSendEmail = () => {
        this.setState({
            displayErr: 'block',
            errMessage: 'invalide Email!!!!'
        })
    }
    loginForm = () => {
        return (
            <div>
                <div>
                    <div class="show-login-sign">Sign in as : </div>
                    <br />
                    <div class="show-login-btn student" name="S" onClick={this.hundleClick}>Student</div>
                    <div class="show-login-btn professor" name="P" onClick={this.hundleClick}>Professor</div>
                </div>
                <div class={this.state.showed ? "login-box showed" : "login-box"}>
                    <div class="hide-login-btn" onClick={this.hundleClick}><i class="fas fa-times"></i></div>
                    <form class="login-form" onSubmit={this.hundleSubmit} >

                        <h1>{this.state.title}</h1>
                        <div className="group-input" style={{ display: this.state.displaylog }}>
                            <input class="txtb " type="text" name="username" placeholder="Username" onChange={this.hundleChange} />

                            <input class="txtb" type="password" name="password" placeholder="Password" onChange={this.hundleChange} />

                            <input class="login-btn" type="submit" name="" value="Login" /><br />
                            <div class="invalid-feedback" style={{ display: this.state.displayErr }}>
                                {this.state.errMessage}
                            </div>
                            <span className="pass-reco" onClick={this.hundleForget}>Forgot Password?</span>
                        </div>
                        <div className="recp-group" style={{ display: this.state.displayrecup }}>
                            <input class="txtb " type="email" name="email" placeholder="exemple@gmail.com" onChange={this.hundleChange} />
                            <div class="invalid-feedback" style={{ display: this.state.displayErr }}>
                                {this.state.errMessage}
                            </div>
                            <input class="login-btn" type="submit" name="sendEmail" value="Send" onClick={this.hundleSendEmail} /><br />
                            <button class="login-btn " onClick={this.hundleRetrun} >Return</button><br />


                        </div>
                    </form>
                </div>

                {this.renderRedirect()}

            </div >
        )
    }
    render() {
        console.log(this.state.username)
        return (
            <div>
                {this.loginForm()}
            </div>
        )
    }
}

export default LoginForm;