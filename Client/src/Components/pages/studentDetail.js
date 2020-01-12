import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/studentDetail.css'

class StudentDetail extends Component {
    state = {
        photo: "https://img.freepik.com/vecteurs-libre/caricature-profil-homme-affaires_18591-58479.jpg?size=338&ext=jpg",
    }
    containerDetail = () => {
        return (
            <div className="container row ">
                <div className="vector-profile col-4">
                    <img src={this.state.photo} alt="" srcset="" />
                </div>
                <div className="list-info col row">
                    <legend className="info-title">About Me</legend>
                    <ul className="info col-3">
                        <li>Name:</li>
                        <li>Gender:</li>
                        <li>Father Name:</li>
                        <li>Mother Name:</li>
                        <li>Date of birth:</li>
                        <li>Father Occupation:</li>
                        <li>E-mail:</li>
                        <li>Admission Date:</li>
                        <li>Class:</li>
                        <li>Section:</li>
                        <li>Roll:</li>
                        <li>Adress:</li>
                        <li>Phone:</li>
                        <li>Password:</li>
                    </ul>
                    <ul className=" info  info-elements col">
                        <li>Lane Streetfield</li>
                        <li>Male</li>
                        <li></li>
                        <li></li>
                        <li>3/9/2019</li>
                        <li></li>
                        <li>nswayland0@livejournal.com</li>
                        <li>5/24/2019</li>
                        <li>6</li>
                        <li>C</li>
                        <li>1</li>
                        <li>6 Cottonwood Street</li>
                        <li>+62 963 549 6150</li>
                        <li></li>
                    </ul>
                </div>
                <div className="icons">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-print"></i>
                    <i class="fas fa-download"></i>
                </div>
            </div >
        )
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10">
                        <Header />
                        <span className="mini-nav">Home-Student Detail</span>
                        <div className="container-form">
                            <div className="container-header">
                                Hicham douch Details
                            </div>
                            {this.containerDetail()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentDetail;