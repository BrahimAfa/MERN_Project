import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/students.css'
import Data from './Data.json';
import Axios from 'axios';
import { getUsers, deleteUser } from '../../Api/User.api';
import { dateFormater } from '../../utils/helpers';

export default class students extends Component {
    state = {

        loadingMsg: "Loading...!!",
        Students: [],
        loading: true,
        user: { group: [{}] }
    }
    handleclick = (e) => {
        // const selectedIndex = event.target.;
        //console.log(e.target.parentNode.getAttribute('data-key'));
        const user = this.state.Students.find(u => u._id === e.target.parentNode.getAttribute('data-key'));
        this.setState({ user })
        console.log(this.state.user, this.state.Students.find(u => u._id === e.target.parentNode.getAttribute('data-key')));

    }

    async componentDidMount() {
        const { error, data } = await getUsers("Student");
        if (error) return this.setState({ loadingMsg: "Error while Loading Data try again..." });
        console.log(data);

        return this.setState({ Students: data, loading: false });

    }

    //delete in element from table
    hundleDelete = async () => {
        const { error, data } = await deleteUser(this.state.user._id);
        if (error) return alert(error.message);
        document.querySelector("#MdalDel").classList.toggle("show")
        document.querySelector("#MdalDel").attributes.removeNamedItem("style")
        document.querySelectorAll('.modal-backdrop').forEach(x => document.body.removeChild(x))
        // this.setState({ Students: this.state.Students.filter(u => u !== data._id) })
        window.location = '/students'
    }
    //edit in element from table
    hundleEdit = () => {

    }
    //get signe etudiant details
    hundleDetail = () => {

    }
    studentsList = () => {
        let key = 0

        const students = this.state.Students.map((item) => {
            key++;
            return (
                <tr key={key} className={key % 2 == 0 ? "first-col" : "seconde-col"}>
                    <th scope="row"><input type="checkbox" name="check-all" id="all" /> #{key}</th>
                    <td>pic</td>
                    <td>{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.gender}</td>
                    <td>{item.CNE}</td>
                    <td>{item.CNI}</td>
                    <td>{item.group[0].code}</td>
                    <td>{dateFormater(item.birthdate)}</td>
                    <td>{item.tele}</td>
                    <td>{item.email}</td>
                    <td>{item.absenceAVG}</td>
                    <td data-key={item._id}>
                        <i class="fas fa-eye" onClick={this.handleclick} data-toggle="modal" data-target="#exampleModal"></i>
                        <i class="fas fa-edit" onClick={this.handleclick}></i>
                        <i class="fas fa-trash-alt" onClick={this.handleclick} data-toggle="modal" data-target="#MdalDel"></i>
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
                {this.ModalDeleteStudent()}
                {/* Modale Show Data */}
                {this.ModalShowDetials()}
            </div >
        );
    }
    ModalDeleteStudent() {
        return (
            <div class="modal fade" id="MdalDel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete {`${this.state.user.firstName} ${this.state.user.lastName}`}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h3>Confirm Delete...</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" onClick={this.hundleDelete}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ModalShowDetials = () => {

        return (<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col">
                            <div class="col-12">

                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-lg-8 col-md-6">
                                            <h3 class="mb-0 text-truncated">{`${this.state.user.firstName} ${this.state.user.lastName}`}</h3>
                                            <p class="lead">{this.state.user.group[0].name}</p>
                                            <p>Last Absence : Yesterday</p>
                                            <p>Module Valid :2</p>

                                            <p>Module Rat :0</p>
                                            <p>
                                                <span class="badge badge-info tags">{this.state.user.group[0].code}</span>
                                            </p>
                                        </div>
                                        <div class="col-12 col-lg-4 col-md-6 text-center">
                                            <img src={this.state.user.pictur} alt="" class="mx-auto rounded-circle img-fluid" />
                                            <br />
                                            <ul class="list-inline ratings text-center" title="Absence here Later">
                                                <li class="list-inline-item"><span class="fa fa-star"></span>
                                                </li>
                                                <li class="list-inline-item"><span class="fa fa-star"></span>
                                                </li>
                                                <li class="list-inline-item"><span class="fa fa-star"></span>
                                                </li>
                                                <li class="list-inline-item"><span class="fa fa-star"></span>
                                                </li>
                                                <li class="list-inline-item"><span class="fa fa-star"></span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <!--/col--> */}
                                    </div>

                                    {/* <!--/row--> */}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">more...</button>
                                </div>
                                {/* <!--/card-block--> */}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>);
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
