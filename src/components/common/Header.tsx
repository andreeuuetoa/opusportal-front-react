import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {JWTContext} from "../../routes/Root";

export const Header = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    return (
        <header>
            <nav
                className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-black border-bottom box-shadow mb-3">
                <div className="container">
                    <Link className="navbar-brand text-light" to="/">MUBA OpusPortal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav" />
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{'display': JWTResponse === null ? '' : 'none'}}>
                                <Link className="nav-link text-light" to="/Register">Register</Link>
                            </li>
                            <li className="nav-item" style={{'display': JWTResponse === null ? '' : 'none'}}>
                                <Link className="nav-link text-light" to="/SignIn">Log in</Link>
                            </li>
                            <li className="nav-item" style={{'display': JWTResponse === null ? 'none' : ''}}>
                                <Link className="nav-link text-light" to="/SignOut">Log out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};