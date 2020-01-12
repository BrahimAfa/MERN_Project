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
            <PrivateRoute path='/dashbord' exact component={Dashboard} />
            <PrivateRoute path='/redirect' exact component={Loading} />
            <PrivateRoute path='/students' exact component={Students} />
            <PrivateRoute path='/absence' exact component={Attendance} />
            <PrivateRoute path='/admit_student' exact component={AdmitForm} />
            <PrivateRoute path='/admit_student/:id' exact component={AdmitForm} />
            <PrivateRoute path='/student_detail/:id' exact component={StudentDetail} />
            <PrivateRoute path='/student_detail' exact component={StudentDetail} />
            <PrivateRoute path='/account' exact component={Account} />

            <Route render={prop => (<h1><u>{window.location.pathname}</u> NOT FOUND</h1>)} />
        </Switch>
    )
}

export default Routes;