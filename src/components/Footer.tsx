import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {JWTContext} from "../routes/Root";

export const Footer = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    return (
        <footer>
            <nav className="navbar footer bg-black">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={`/Privacy/${JWTResponse}`}>Privacy</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a target="_blank" href="https://localhost:7177/swagger/index.html">For developers</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
};