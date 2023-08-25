import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './site.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './routes/ErrorPage';
import {Register} from "./routes/identity/Register";
import {SignIn} from "./routes/identity/SignIn";
import {Privacy} from "./routes/Privacy";
import {Books} from "./routes/books/Books";
import { SignOut } from './routes/identity/SignOut';
import {AdminDashboard} from "./components/admin/AdminDashboard";
import {BookForm} from "./components/admin/library/BookForm";
import {Dashboard} from "./components/user/Dashboard";
import {Root} from "./routes/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/Register",
                element: <Register />,
                errorElement: <ErrorPage />
            },
            {
                path: "/SignIn",
                element: <SignIn />,
                errorElement: <ErrorPage />
            },
            {
                path: "/SignOut",
                element: <SignOut />,
                errorElement: <ErrorPage />
            },
            {
                path: "/Privacy/:id",
                element: <Privacy/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/Books/:id?",
                element: <Books/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/BookForm",
                element: <BookForm/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/Admin",
                element: <AdminDashboard/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/Dashboard",
                element: <Dashboard/>,
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
