import React from 'react';
import './loading.css';
import { Redirect } from 'react-router-dom'
import { Component } from 'react'

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
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className="loading-container">
                <div className="loading">
                    <span>Loading...</span>
                </div>


            </div>

        )
    }
}
export default Loading;