import React from 'react';
import {Outlet} from "react-router-dom";

function ErrorPageTemplate() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default ErrorPageTemplate;