import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/students.css'
import Data from './Data.json';


export default class students extends Component {
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

    //get data and send 24 a limite of rows/items
    componentDidMount(){
        
    }
    studentsList = () => {
        const students = Data.splice(0, 24).map((item, key) => {
            console.log(key)
            return (
                <tr key={key} className={key % 2 == 0 ? "first-col" : "seconde-col"}>
                    <th scope="row"><input type="checkbox" name="check-all" id="all" /> #{item.id}</th>
                    <td>pic</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.parents}</td>
                    <td>{item.class}</td>
                    <td>{item.section}</td>
                    <td>{item.Address}</td>
                    <td>{item.date_birth}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                    <td>
                        <i class="fas fa-eye" onClick={() => { }} data-toggle="modal" data-target="#exampleModal"></i>
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
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
                            <th scope="col">Parents Name</th>
                            <th scope="col">Class</th>
                            <th scope="col">Section</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
                </table>
                {/* Modale  */}
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
                        {this.studentsList()}
                    </div>
                </div>
            </div>
        )
    }
}
