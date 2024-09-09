import React from 'react';
import './css/LoginPage.css';
import axios from "../axios";


function LoginPage() {

    const login = () => {
        const loginBaseUrl = process.env.REACT_APP_LOGIN_BASE_URL;
        axios('/login')
            .then( response => {
                window.open(loginBaseUrl + "/oauth2/authorization/google", "_self");
            })
    }

    const redisTest = () => {
        axios.get("/login/tmp")
            .then(response => console.log(response))
    }

    return (
        <div className="App">
            <div className="OuterButton"/>
            <div className="MainButton">
                <div className="Title"
                     onClick={() => login()}>IN</div>
            </div>
        </div>
    );
}

export default LoginPage;
