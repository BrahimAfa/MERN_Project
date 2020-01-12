import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Attendance from './Components/pages/attendance';
import Dashboard from './Components/pages/Dashboard';
import Students from './Components/pages/students'
import Loading from './Components/pages/loading/loading'
import AdmitForm from './Components/Forms/admitForm/admitForm'
import PublicRoute from './Components/Auth/PublicRoute';
import PrivateRoute from './Components/Auth/PrivateRoute';
import StudentDetail from './Components/pages/studentDetail';
import Account from './Components/pages/Account'
const Routes = () => {

    return (
        <Switch>
            <PublicRoute restricted={true} path='/' exact component={Home} />
            {/* Private */}
            <PublicRoute path='/dashbord' exact component={Dashboard} />
            <PublicRoute path='/redirect' exact component={Loading} />
            <PublicRoute path='/students' exact component={Students} />
            <PublicRoute path='/absence' exact component={Attendance} />
            <PublicRoute path='/admit_student' exact component={AdmitForm} />
            <PublicRoute path='/student_detail' exact component={StudentDetail} />
            <PublicRoute path='/account' exact component={Account} />

            <Route render={prop => (<h1><u>{window.location.pathname}</u> NOT FOUND</h1>)} />
        </Switch>
    )
}

export default Routes;