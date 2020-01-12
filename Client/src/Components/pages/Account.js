import React, { Component } from 'react'
import UserForm from '../Forms/UserForm/UserForm'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import UserProfil from '../pages/UserProfil'

class Account extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10">
                        <Header />
                        <span className="mini-nav">Home-Account Setting</span>
                        <div className="row row-col-2">
                            <div className="col-4">
                                <UserForm />
                            </div>
                            <div className="col">
                                <UserProfil />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Account;