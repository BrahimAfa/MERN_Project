import React, { Component } from 'react'
import NavBar from '../../wedgets/navbar';
import Header from '../../wedgets/Header';
import './admitForm.css'
import Axios from 'axios';

export default class AdmitForm extends Component {
    state = {
        firstName: "",
        gender: "",
        lastName: "",
        birthdate: "",
        CNE: "",
        CNI: "",
        email: "",
        password: "",
        email: "",
        group: { code: "" }
    }
    hundleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    hundleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await Axios.post("http://localhost:3030/api/student", this.state, {
                headers: { "Authorization": localStorage.getItem("token") }
            });
            alert("Successfully Inserted");
            alert(JSON.stringify(result.data))
        } catch (err) {
            console.log(err);
            console.log(err.response);
            alert(err.response.data.message);
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

            group: { code: e.target.options[selectedIndex].value }
        })
    }
    //add students form
    StudentForm = () => {
        return (
            <form onSubmit={this.hundleSubmit}>

                <span className="title-1">Student Information</span>
                <div class="row row-position">

                    <div class="col">
                        <label htmlFor="">Fisrt Name</label>
                        <input type="text" name="firstName" onChange={this.hundleChange} class="form-control line-1" id="first_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastName" onChange={this.hundleChange} class="form-control line-1" id="last_name" />
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
                        <select onChange={this.hundleDrodownChangeG} name="group" className="custom-select line-1" id="class">
                            <option value="" selected disabled >please Select Section</option>
                            <option value="">....</option>
                            <option value="GI">GI</option>
                            <option value="MGE">MGE</option>
                            <option value="TM">TM</option>
                            <option value="ISIL">ISIL</option>
                        </select>
                    </div>
                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="">Gender</label>
                        <select onChange={this.hundleDrodownChange} name="gender" className="custom-select line-1" id="gender-input">
                            <option value="" selected disabled >please Select Gender</option>
                            <option value="">....</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="col">
                        <label htmlFor="">Date Of Birth</label>
                        <input onChange={this.hundleChange} name="birthdate" type="Date" class="form-control line-1" id="first_name" placeholder="dd/mm/yyyy" />
                    </div>
                    <div class="col">
                        <label htmlFor="roll">CIN</label>
                        <input onChange={this.hundleChange} name="CNI" type="text" class="form-control line-1 line-move" id="roll" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">CNE</label>
                        <input onChange={this.hundleChange} name="CNE" type="text" class="form-control line-1 line-move" id="admission" />
                    </div>

                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="">E-mail</label>
                        <input onChange={this.hundleChange} name="email" type="email" class="form-control line-1" id="email-input" />
                    </div>

                    <div class="col">
                        <label htmlFor="" id="upload-title">password</label>
                        <input onChange={this.hundleChange} name="password" type="password" class="form-control line-1" id="upload-fil" />
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
                                Add Student Form
                            </div>
                            {this.StudentForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
