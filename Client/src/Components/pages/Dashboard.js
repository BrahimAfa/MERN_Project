import React, { Component } from 'react'
import NavBar from '../wedgets/navbar';
import Header from '../wedgets/Header';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-2"><NavBar /></div>
                    <div class="col-sm-10"><Header /></div>
                </div>
            </div>
        )
    }
}
