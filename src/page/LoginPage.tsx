import React from 'react';
import './css/LoginPage.css';
import axios from "../axios";


function LoginPage() {

    const login = () => {
        axios('/login')
            .then( response => {
                window.open("http://localhost:8080/oauth2/authorization/google", "_self");
            })
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
