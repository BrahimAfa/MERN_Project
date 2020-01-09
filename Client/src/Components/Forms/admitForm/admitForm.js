import React, { Component } from 'react'
import NavBar from '../../wedgets/navbar';
import Header from '../../wedgets/Header';
import './admitForm.css'

export default class AdmitForm extends Component {
    state = {
        photo: [],
        name: [],
        gender: [],
        parents: [],
        class: [],
        section: [],
        Adress: [],
        dateOfBirth: [],
        Mobile: [],
        Email: []
    }
    //add students form
    StudentForm = () => {
        return (
            <form>

                <span className="title-1">Student Information</span>
                <div class="row row-position">

                    <div class="col">
                        <label htmlFor="">Fisrt Name</label>
                        <input type="text" class="form-control line-1" id="first_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Last Name</label>
                        <input type="text" class="form-control line-1" id="last_name" />
                    </div>
                    <div class="col">
                        <label htmlFor="">Class</label>
                        <select className="custom-select line-1" id="class">
                            <option value="" selected disabled >please Select Class</option>
                            <option value="">....</option>
                        </select>
                    </div>
                    <div class="col">
                        <label htmlFor="">Section</label>
                        <select className="custom-select line-1" id="class">
                            <option value="" selected disabled >please Select Section</option>
                            <option value="">....</option>
                        </select>
                    </div>
                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="">Gender</label>
                        <select className="custom-select line-1" id="gender-input">
                            <option value="" selected disabled >please Select Gender</option>
                            <option value="">....</option>
                        </select>
                    </div>
                    <div class="col">
                        <label htmlFor="">Date Of Birth</label>
                        <input type="Date" class="form-control line-1" id="first_name" placeholder="dd/mm/yyyy" />
                    </div>
                    <div class="col">
                        <label htmlFor="roll">Roll</label>
                        <input type="text" class="form-control line-1 line-move" id="roll" />
                    </div>
                    <div class="col">
                        <label htmlFor="admission">Admission No</label>
                        <input type="text" class="form-control line-1 line-move" id="admission" />
                    </div>

                </div>
                <div class="row row-position">
                    <div class="col">
                        <label htmlFor="">E-mail</label>
                        <input type="email" class="form-control line-1" id="email-input" />
                    </div>
                    <div class="col">
                        <label htmlFor="upload-fil" id="upload-title">Upload Student Photo(150px X 150px)</label>
                        <input type="file" class="form-control line-1" id="upload-fil" />
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
                <button className="btn btn-warning">Save</button>
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
