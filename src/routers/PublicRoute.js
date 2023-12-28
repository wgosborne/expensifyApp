// import React from "react";
// import { connect } from "react-redux";
// import { Route, Redirect } from 'react-router-dom';

// export const PublicRoute = ({ //renaming component with uppercase because we are going to need to render it
//     isAuthenticated,
//     component: Component,
//     ...rest //rest is the other stuff to pass down
//     }) => (
//     <Route {...rest} component={(props) => (
//         isAuthenticated ? (
//             <Redirect to='/dashboard' />
//         ) : (
//             <Component {...props}/>
//         )
//     )}/>
// );

// const mapStateToProps = (state) => ({ //!! means give the boolean value
//     isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStateToProps)(PublicRoute);
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard' />
        ) : (
            <Component {...props}/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
