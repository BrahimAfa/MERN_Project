import React, { Component } from 'react'
import './css/userprofil.css'

export default class UserProfil extends Component {
    state = {
        photo: "https://img.freepik.com/vecteurs-libre/caricature-profil-homme-affaires_18591-58479.jpg?size=338&ext=jpg",
    }
    userProfil = () => {
        return (
            <div className="container row ">
                <div className="vector-profile col-4">
                    <img src={this.state.photo} alt="" srcset="" />
                </div>
                <div className="list-info col row ">
                    <ul className="info info-add  col-3">
                        <li>Name:</li>
                        <li>E-mail:</li>
                        <li>Password:</li>
                        <li>Adresse:</li>
                        <li>Phone:</li>
                        <li>School Code:</li>
                        <li>Joining Date:</li>

                    </ul>
                    <ul className=" info info-add  info-elements col">
                        <li>Lane Streetfield</li>
                        <li>Male</li>
                        <li></li>
                        <li></li>
                        <li>3/9/2019</li>
                        <li></li>
                        <li>nswayland0@livejournal.com</li>

                    </ul>
                </div>
            </div>)

    }
    render() {
        return (
            <div className="container-profil">
                <legend>User Profil</legend>
                {this.userProfil()}
            </div>
        )
    }
}
