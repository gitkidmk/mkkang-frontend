import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './page/MainPage';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./page/ErrorPage";
import AnyPage from "./page/AnyPage";
import FamilyPage from "./page/FamilyPage";
import AdminPage from "./page/AdminPage";
import LoginPage from "./page/LoginPage";

const root = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        errorElement: <ErrorPage errorCode={400}/>
    },
    {
        path: "/main",
        element: <MainPage/>,
    },
    {
        path: "/any",
        element: <AnyPage/>,
    },
    {
        path: "/family",
        element: <FamilyPage/>,
    },
    {
        path: "/admin",
        element: <AdminPage/>,
    },
]);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
