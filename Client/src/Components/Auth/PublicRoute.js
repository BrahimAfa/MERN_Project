import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/loginHelper';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        //show the componet even if the user is not connected 
        //
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/Dashbord" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;