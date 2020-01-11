import React, { Component, } from 'react'
import { Redirect } from 'react-router-dom'
import { isInRole } from '../../utils/loginHelper';
class Authorize extends Component {
    state = {
        isAuthorized: false
    }
    isAuth = (role) => true;

    render() {
        return (
            <div >

                {this.isAuth(this.props.role) ? this.props.children : ""}
            </div>
        )
    }
}
export default Authorize;