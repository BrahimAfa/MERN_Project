import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/navbar.css'
import Authorize from '../Auth/authorize';
class NavBar extends Component {
    state = {
        chevron: 'fas fa-chevron-right',
    }
    hundleClick = (e) => {
        if (this.state.chevron == "fas fa-chevron-right") {
            this.setState({ chevron: 'fas fa-chevron-down' });

        } else {
            this.setState({ chevron: 'fas fa-chevron-right' })
        }
        console.log(e.target.classList);
    }
    template = () => {
        return (
            <div>
                <div className="nav-head">ESTE</div>
                <ul class="nav flex-column">
                    {/* AUTHORIZATION FOR PROFESSOR */}
                    <Authorize role="Admin">
                        <li class="nav-item" >
                            <span class="nav-link active" onClick={this.hundleClick}><i className="fas fa-tachometer-alt ico"></i>Dashborad<i className={this.state.chevron}></i></span>

                            <ul className="nav flex-column sub-nav">
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Admin</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Student</li>
                            </ul>
                        </li>
                        <li className="nav-item " >
                            <span className="nav-link" onClick={this.hundleClick}><i className="fas fa-user-graduate ico"></i>Students<i className={this.state.chevron}></i></span>
                            <ul className="nav flex-column sub-nav">
                                <li className="sub-item ml-5 pt-3"><i className="fas fa-angle-right"></i><Link to='/students'>All Students</Link> </li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i><Link to='student_detail'>Students Details</Link> </li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i> <Link to='/admit_student'>Admit Form</Link></li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Student Promotion</li>

                            </ul>

                        </li>
                        <li className="nav-item" >
                            <span className="nav-link" onClick={this.hundleClick} ><i className="fas fa-chalkboard-teacher ico"></i>Teachers<i className={this.state.chevron}></i></span>
                            <ul className="nav fle x-column sub-nav">
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>All Teachers</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Teaches Details</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Add Teacher</li>
                            </ul>
                        </li>
                    </Authorize>
                    {/* AUTHORIZATION FOR STUDENT */}
                    <Authorize role="Student Professor">
                        <li className="nav-item" >
                            <span className="nav-link" onClick={this.hundleClick}><i className="fas fa-book ico"></i>Library<i className={this.state.chevron}></i></span>
                            <ul className="nav flex-column sub-nav">
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>All Books</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Add Book</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.hundleClick}><i className="fas fa-chalkboard ico"></i>class<i className={this.state.chevron}></i></span>
                            <ul className="nav flex-column sub-nav">
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>All Class</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Add New Class</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.hundleClick} ><i className="fas fa-copy ico"></i>Subject<i className={this.state.chevron}></i></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" >Class Routine<i className={this.state.chevron}></i></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" > <Link to='/absence'> Attendance</Link><i className={this.state.chevron}></i></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" >Exam<i className={this.state.chevron}></i></span>
                            <ul className="nav flex-column sub-nav">
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Exam Schedule</li>
                                <li className="sub-item ml-5"><i className="fas fa-angle-right"></i>Exam Grades</li>
                            </ul>
                        </li>
                    </Authorize>
                    <li className="nav-item">
                        <span className="nav-link" ><i className="far fa-flag ico"></i>Notice<i className={this.state.chevron}></i></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" ><i className="far fa-envelope ico"></i>Message<i className={this.state.chevron}></i></span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" ><i className="fas fa-cog ico"></i><Link to='/account'>Account</Link> </span>
                    </li>

                </ul>
            </div >

        );
    }
    render() {
        return (
            <div>
                {this.template()}
            </div>
        )
    }
}

export default NavBar;