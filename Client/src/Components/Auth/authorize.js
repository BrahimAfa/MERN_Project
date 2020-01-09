import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Authorize extends Component {
    state = {
        isAuthorized: false
    }
    isAuth = (role) => {
        console.log(role, localStorage.getItem("role"));

        if (localStorage.getItem("role") === role) return true;
        return false;
    }
    render() {
        return (
            <div >
                {this.isAuth(this.props.role) ? this.props.children : ""}
            </div>
        )
    }
}
export default Authorize;