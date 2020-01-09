import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Attendance from './Components/pages/attendance';
import Dashboard from './Components/pages/Dashboard';
import Students from './Components/pages/students'
import Loading from './Components/pages/loading/loading'
import AdmitForm from './Components/Forms/admitForm/admitForm'
import Authenticate from './Components/Auth/auth'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Authenticate>
                <Route path='/absence' exact component={Attendance} />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/redirect' exact component={Loading} />
                <Route path='/students' exact component={Students} />
                <Route path='/admit_student' exact component={AdmitForm} />
            </Authenticate>
        </Switch>
    )
}

export default Routes;