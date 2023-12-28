import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ //renaming component with uppercase because we are going to need to render it
    isAuthenticated,
    component: Component,
    ...rest //rest is the other stuff to pass down
    }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to='/' />
        )
    )}/>
);

const mapStateToProps = (state) => ({ //!! means give the boolean value
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);