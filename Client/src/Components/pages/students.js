import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/students.css'
import Data from './Data.json';
import Axios from 'axios';
import { getUsers } from '../../Api/User.api';
import { dateFormater } from '../../utils/helpers';


export default class students extends Component {
    state = {
        loadingMsg: "Loading...!!",
        Students: [],
        loading: true,
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

    //get data and send 24 a limite of rows/items
    onDeleteClick(e){
        
    }
    async componentDidMount() {
        const { data, error } = await getUsers();
        if (error) return this.setState({ loadingMsg: error.message });

        return this.setState({ Students: data, loading: false });
    }
    studentsList = () => {
        let key = 0
        const students = this.state.Students.splice(0, 24).map((item) => {
            key++;
            return (
                <tr key={key} data-key={item._id} className={key % 2 == 0 ? "first-col" : "seconde-col"}>
                    <th scope="row"><input type="checkbox" name="check-all" id="all" /> #{key}</th>
                    <td>pic</td>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.gender}</td>
                    <td>{item.CNE}</td>
                    <td>{item.CNI}</td>
                    <td>{item.group.code}</td>
                    <td>{dateFormater(item.birthdate)}</td>
                    <td>{item.tele}</td>
                    <td>{item.email}</td>
                    <td>{item.absenceAVG}</td>
                    <td>
                        <i class="fas fa-eye" onClick={() => { }} data-toggle="modal" data-target="#exampleModal"></i>
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt" data-toggle="modal" data-target="#MdalDel"></i>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <table class=" table table-striped">
                    <div className="tab-header">
                        <span className="tab-header-title">All Students</span>
                        <input type="text" name="Roll" className="input-text" id="search-input" placeholder="#Roll Type Here..." />
                        <input type="text" name="Roll" className="input-text" id="section-input" placeholder="type Section.." />
                        <button className="btn btn-info" id="search-btn">Search</button>
                    </div>
                    <thead>
                    </thead>
                    <thead>
                        <tr className="first-col">
                            <th scope="col" ><input type="checkbox" name="check-all" id="all" /> roll</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">CNE</th>
                            <th scope="col">CNI</th>
                            <th scope="col">Group</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Absence</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
                </table>
                {/* Modal delete */}
                <div class="modal fade" id="MdalDel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h3>Confirm Delete...</h3>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" onClick = {this.onDeleteClick}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modale Show Data */}

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    //delete in element from table
    hundleDelete = () => {

    }
    //edit in element from table
    hundleEdit = () => {

    }
    //get signe etudiant details
    hundleDetail = () => {

    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10">
                        <Header />
                        <span className="mini-nav">Home-Attendance</span>
                        {this.state.loading ? <h3>{this.state.loadingMsg}</h3> : this.studentsList()}
                    </div>
                </div>
            </div>
        )
    }
}
