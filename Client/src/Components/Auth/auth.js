import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Authenticate extends Component {
    state = {
        isAuthorized: false
    }
    isAuth = () => {
        console.log(!localStorage.getItem("token"));
        if (localStorage.getItem("token")) return true;
        return false;

    }
    render() {
        return (
            <div >
                {this.isAuth() ? this.props.children : <Redirect to='/' />}
            </div>
        )
    }
}
export default Authenticate;