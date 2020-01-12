import React from 'react';
import './loading.css';
import { Redirect } from 'react-router-dom'
import { Component } from 'react'
import Dashboard from '../Dashboard';

class Loading extends Component {
    state = {
        redirect: false
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                redirect: true
            })
        }, 2000);
    }
    render() {

        return (
            <div>
                {
                    this.state.redirect
                        ? <Redirect to="/dashbord" />
                        :
                        <div className="loading-container">
                            <div className="loading"><span>Loading...</span>    </div>
                        </div>
                }
            </div>

        )
    }
}
export default Loading;