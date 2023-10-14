import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './site.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ErrorPage} from './routes/ErrorPage';
import {SignIn} from "./routes/identity/SignIn";
import {Privacy} from "./routes/Privacy";
import {Books} from "./routes/admin/library/Books";
import {SignOut} from './routes/identity/SignOut';
import {AdminDashboard} from "./routes/admin/AdminDashboard";
import {BookForm} from "./routes/admin/library/BookForm";
import {Dashboard} from "./routes/user/Dashboard";
import {Root} from "./routes/Root";
import {Concerts} from "./routes/admin/concerts/Concerts";
import {Competitions} from "./routes/admin/competitions/Competitions";
import {Users} from "./routes/admin/users/Users";
import {About} from "./routes/common/About";
import {AccountSettings} from "./routes/common/AccountSettings";

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
                path: "/about",
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
                path: "/raamatud/:id?",
                element: <Books/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/sisesta-raamat",
                element: <BookForm/>,
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
                path: "/settings",
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
