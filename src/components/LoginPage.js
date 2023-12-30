import React from "react";
import { connect } from "react-redux";
import { startGoogleLogin, startMicrosoftLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className="box-layout__box">
            <h1 className="box-layout__title">EXPENSIFY</h1>
            <p>Time to get your exenses under control</p>
            <button className="button" onClick={startGoogleLogin}>
                Login with Google
            </button>




        </div>
    </div>
);

const mapDispatchToProps = () => ({
    startLogin: () => startLogin()
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

            // <button className="button" onClick={startMicrosoftLogin}>
            //     Login with Microsoft
            // </button>