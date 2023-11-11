import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './site.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ErrorPage} from './common/routes/ErrorPage';
import {SignIn} from "./identity/routes/signin/SignIn";
import {Privacy} from "./common/routes/Privacy";
import {Books} from "./library/routes/Books";
import {SignOut} from './identity/routes/SignOut';
import {AdminDashboard} from "./dashboard/AdminDashboard";
import {AddBook} from "./library/routes/AddBook";
import {Dashboard} from "./dashboard/Dashboard";
import {Root} from "./root/Root";
import {Concerts} from "./concerts/Concerts";
import {Competitions} from "./competitions/Competitions";
import {Users} from "./dashboard/Users";
import {About} from "./common/routes/About";
import {AccountSettings} from "./identity/routes/AccountSettings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/logi-sisse",
                element: <SignIn/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/logi-valja",
                element: <SignOut/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/teave",
                element: <About/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/privacy/:id",
                element: <Privacy/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/admin",
                element: <AdminDashboard/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/raamatud",
                element: <Books/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/lisa-raamat",
                element: <AddBook/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/kontserdid",
                element: <Concerts/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/konkursid",
                element: <Competitions/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/kasutajad",
                element: <Users/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/kasutaja-satted",
                element: <AccountSettings/>,
                errorElement: <ErrorPage/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
