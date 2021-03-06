import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute =
        ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                sessionStorage.token ? <Component {...props} /> 
                : <Redirect to={{ pathname: '/', state: { from: props.location }}} />   
            )} />
        )

export default ProtectedRoute;