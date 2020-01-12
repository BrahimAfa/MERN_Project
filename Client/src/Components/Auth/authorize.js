import React, { Component, } from 'react'
import { Redirect } from 'react-router-dom'
import { isInRole, getROLE } from '../../utils/loginHelper';
class Authorize extends Component {
    state = {
        isAuthorized: false
    }
    isAuth = (role) => role.toLowerCase().split(" ").includes(getROLE().toLowerCase());

    render() {
        return (
            <div >

                {this.isAuth(this.props.role) ? this.props.children : ""}
            </div>
        )
    }
}
export default Authorize;