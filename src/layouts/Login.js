import React from 'react';

import LoginFrom from '../components/LoginForm'

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                {/* <div className="content">
                    <div className="main"> */}
                        <LoginFrom />
                    {/* </div>
                </div> */}
            </div>
        )
    }
}