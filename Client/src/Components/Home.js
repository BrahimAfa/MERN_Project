import React, { Component } from 'react'
import LoginForm from './Forms/loginForm/loginForm';
import FormPage from './Forms/FormPage'

import './home.css'

class Home extends Component {
    render() {
        return (
            <div>
                {/* <!-- Header --> */}
                <header class="masthead">
                    <div class="container d-flex h-100 align-items-center">
                        <div class="mx-auto text-center">
                            <h1 class="mx-auto my-0 text-uppercase">Welcome</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5"></h2>

                        </div>
                    </div>
                </header>
                <LoginForm />
                {/* <FormPage /> */}
            </div>
        )
    }
}

export default Home;