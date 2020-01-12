import React, { Component } from 'react'
import './userForm.css'

class UserForm extends Component {
    userInputs = () => {
        return (
            <form method="post" className="user-form">
                <legend>Account Setting</legend>
                <label htmlFor="">First Name</label>
                <input type="text" name="first_name" id="first_name" />
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id="last_name" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="pass" id="password" />
                <label htmlFor="adresse">Adresse</label>
                <input type="text" name="adresse" id="adresse" />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" />
                <label htmlFor="school_code">School code</label>
                <input type="text" name="school_code" id="school_code" />
                <label htmlFor="joining_date">Joining Date</label>
                <input type="date" name="joining_date" id="joining_date" />
                <label htmlFor="photo">Upload Photo(150px X 150px)</label>
                <input type="file" name="photo" id="photo" />
                <input type="button" value="Update" className="btn btn-warning" />
                <input type="reset" value="Reset" className="btn btn-info" />


            </form>
        )
    }
    render() {
        return (
            <div>
                {this.userInputs()}
            </div>
        )
    }
}
export default UserForm;