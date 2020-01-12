import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/studentDetail.css'
import { getUser } from '../../Api/User.api';
import { dateFormater } from '../../utils/helpers';
import { getID } from '../../utils/loginHelper';

class StudentDetail extends Component {
    state = {
        user: { group: [{ code: "" }] },
        id: getID(),
    }
    async componentWillMount() {
        const id = this.props.match.params.id || this.state.id;
        const { error, data } = await getUser(id);
        if (error) return alert(error.message);
        this.setState({
            user: data
        });
    }
    containerDetail = () => {
        return (
            <div className="container row ">
                <div className="vector-profile col-4">
                    <img src={this.state.user.pictur} alt="" srcset="" />
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
                        <li>{this.state.user.firstName + " " + this.state.user.lastName}.</li>
                        <li>{this.state.user.gender}.</li>
                        <li></li>
                        <li></li>
                        <li>NAN</li>
                        <li></li>
                        <li>NAN</li>
                        <li>{dateFormater(this.state.user.birthdate)}.</li>
                        <li>NAN</li>
                        <li>{this.state.user.email}.</li>
                        <li>NAN</li>
                        <li>{this.state.user.group[0].code}.</li>
                        <li>LP</li>
                        <li>{this.state.user.role}.</li>
                        <li>NAN</li>
                        <li>{this.state.user.tele}.</li>
                        <li>************</li>
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
                                {this.state.user.firstName + " " + this.state.user.lastName} Details
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