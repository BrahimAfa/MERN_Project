import React, { Component } from 'react'
import NavBar from '../../wedgets/navbar';
import Header from '../../wedgets/Header';
import './admitForm.css'
import Axios from 'axios';
import { getUser, postUser, putUser } from '../../../Api/User.api';

export default class AdmitForm extends Component {
    state = {
        role: 'Student',
        componentState: "ADD",
        firstName: "",
        gender: "",
        lastName: "",
        birthdate: "",
        CNE: "",
        CNI: "",
        email: "",
        password: "",
        group: [{ code: "" }]
    }
    hundleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    async componentWillMount() {
        if (this.props.match.params.id) {
            const { error, data } = await getUser(this.props.match.params.id);
            if (error) return alert(error.message);
            console.log(data);
            console.log(data.group[0].code);

            this.setState({
                componentState: "UPDATE",
                firstName: data.firstName,
                gender: data.gender,
                lastName: data.lastName,
                birthdate: data.birthdate,
                CNE: data.CNE,
                CNI: data.CNI,
                email: data.email,
                password: "",
                group: [{ code: data.group[0].code }]
            });
        }
    }
    hundleSubmit = async (e) => {
        e.preventDefault();
        const { componentState, ...newState } = this.state
        delete newState[""];
        console.log(newState);

        if (e.target.name === "ADD") {
            console.log(newState);
            await postUser(newState);
        }

        else if (e.target.name === "UPDATE") {
            await putUser(this.props.match.params.id, newState);
        }
    }

    hundleDrodownChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        console.log(e.target.options[selectedIndex].value);
        this.setState({

            [e.target.name]: e.target.options[selectedIndex].value
        })
    }

    hundleDrodownChangeG = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        console.log(e.target.options[selectedIndex].value);
        this.setState({

            group: [{ code: e.target.options[selectedIndex].value }]
        })
    }
    //add students form
    StudentForm = () => {
        return (
            <form name={this.state.componentState} onSubmit={this.hundleSubmit}>

                <span className="title-1">Student Information</span>
                <div class="row row-position">

                    <div class="col">
                        <label htmlFor="">Fisrt Name</label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.hundleChange} class="form-control line-1" id="first_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.hundleChange} class="form-control line-1" id="last_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Class</label>
                        <select onChange={this.hundleDrodownChange} className="custom-select line-1" id="class">
                            <option value="" selected disabled >please Select Class</option>
                            <option value="">....</option>
                            <option value="">DUT</option>
                            <option value="">Lecense </option>
                        </select>
                    </div>
                    <div class="col">
                        <label htmlFor="">Section</label>
                        <select onChange={this.hundleDrodownChangeG} value={this.state.group[0].code} name="group" className="custom-select line-1" id="class">
                            <option value="" >please Select Section</option>
                            <option value="">....</option>
                            <option value="GL">Génie logiciel</option>
                            <option value="MGE">MGE</option>
                            <option value="TM">Technique de Management</option>
                            <option value="MT">Management du tourisme</option>
                            <option value="ISIL">ingénieur système informatique et logiciel</option>
                        </select>
                    </div>
                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="">Gender</label>
                        <select onChange={this.hundleDrodownChange} value={this.state.gender} name="gender" className="custom-select line-1" id="gender-input">
                            <option value="" selected disabled >please Select Gender</option>
                            <option value="">....</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="col">
                        <label htmlFor="">Date Of Birth</label>
                        <input onChange={this.hundleChange} value={this.state.birthdate} name="birthdate" type="Date" class="form-control line-1" id="first_name" placeholder="dd/mm/yyyy" />
                    </div>
                    <div class="col">
                        <label htmlFor="roll">CIN</label>
                        <input onChange={this.hundleChange} value={this.state.CNI} name="CNI" type="text" class="form-control line-1 line-move" id="roll" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">CNE</label>
                        <input onChange={this.hundleChange} name="CNE" value={this.state.CNE} type="text" class="form-control line-1 line-move" id="admission" />
                    </div>


                </div>
                <div class="row row-position">

                    <div class="col">
                        <label htmlFor="">E-mail</label>
                        <input onChange={this.hundleChange} name="email" value={this.state.email} type="email" class="form-control line-1 line-move" id="email-input" />
                    </div>
                    <div class="col">
                        <label htmlFor="">password</label>
                        <input onChange={this.hundleChange} name="password" type="password" class="form-control line-1 line-move" placeholder={this.state.state === "ADD" ? "Password" : "New Password"} />
                    </div>
                    <div class="col">
                        <label htmlFor="upload-file" >Photo</label>
                        <input name="ImagePicture" type="File" class="form-control line-1 line-move" id="upload-file" />
                    </div>
                </div>

                <span className="title-1">Parents Information</span>
                <div class="row row-position">

                    <div class="col">
                        <label htmlFor="">Father Name</label>
                        <input type="text" class="form-control line-1" id="first_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Mother Name</label>
                        <input type="text" class="form-control line-1" id="last_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Father occupation</label>
                        <input type="text" class="form-control line-1" id="last_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Mother Occupation</label>
                        <input type="text" class="form-control line-1" id="last_name" />
                    </div>

                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="roll">Phone Number</label>
                        <input type="tel" class="form-control line-1" id="roll" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">Nationality</label>
                        <input type="text" class="form-control line-1 " id="admission" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">Present Addres</label>
                        <input type="text" class="form-control line-1" id="admission" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">Permanent Adress</label>
                        <input type="text" class="form-control line-1" id="admission" />
                    </div>

                </div>
                <button className="btn btn-info">Reset</button>
                <button className="btn btn-warning" type="submit">Save</button>
            </form>
        )
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10">
                        <Header />
                        <span className="mini-nav">Home-Admit Student</span>
                        <div className="form-body">
                            <div className="form-body-header">
                                {this.state.componentState === "ADD" ? 'Add Student Form' : 'Modify Student Form'}
                            </div>
                            {this.StudentForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
