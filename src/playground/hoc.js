//Higher Order Components = A component (HOC) that renders another component
//  Has a goal of making code reusable
//  Render hijacking
//  Prop manipulation
//  Astract state
import React from 'react';
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => { // start with uppercase bc its component
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>I wonder if you should be viewing this...</h1>
            { props.isAuthenticated ? (
                <WrappedComponent {...props}/>
                ) : (
                <p>Nope. Not allowed to see this.</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin = {true} info = "Wagner Rocks" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info = "Wagner Rocks" />, document.getElementById('app'));
