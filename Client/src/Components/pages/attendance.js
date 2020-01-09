import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';
import './css/attendance.css';

export default class attendance extends Component {
    searchHundle = () => {
        return (
            <div className="main">
                <div className="search">
                    <div className="head">
                        <span> Checkout student attendance</span>
                    </div>
                    <div className="line-break"></div>
                    <div className="select-group">
                        <div className="sel-1">
                            <label htmlFor="plan">Select Class</label>
                            <select class="sel sel-class" id='plan'>
                                <option selected>one</option>
                                <option value="1">two</option>
                            </select>
                        </div>
                        <div className="sel-2">
                            <label htmlFor="plan">Select Section</label>
                            <select class=" sel sel-section" id='plan'>
                                <option selected>A</option>
                                <option value="1">B</option>
                            </select>
                        </div>
                        <div className="sel-3 ">
                            <label htmlFor="plan">Select Month</label>
                            <select class=" sel sel-month" id='plan'>
                                <option selected>April</option>
                                <option value="1">Mars</option>
                            </select>
                        </div>
                        <div className="sel-4">
                            <label htmlFor="plan">Select year</label>
                            <select class="sel sel-year" id='plan'>
                                <option selected>2019</option>
                                <option value="1">2018</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-warning">Search</button>
                </div>

            </div>
        );
    }

    attendanceSheet = () => {
        return (
            <div className="table-sheet">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr >
                            <th scope="col" className="col-names"><i class="fas fa-long-arrow-alt-down"></i>Students  Date <i class="fas fa-long-arrow-alt-right"></i></th>
                            <th scope="col" className="col-days">First</th>
                            <th scope="col" className="col-days">Last</th>
                            <th scope="col" className="col-days">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        return (
            <div >

                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10">
                        <Header />
                        <span className='nav-pwd'>Home-Attendance</span>

                        {this.searchHundle()}
                        {this.attendanceSheet()}
                    </div>
                </div>
            </div>
        )
    }
}
