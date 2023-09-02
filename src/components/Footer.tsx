import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {JWTContext} from "../routes/Root";

export const Footer = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    return (
        <footer>
            <nav className="footer bg-black">
                <div className="container">
                    <a target="_blank" href="" className="footer-nav">Õppematerjalid</a>
                    <a target="_blank" href="" className="footer-nav">Kohustuslikud materjalid/kirjandus</a>
                </div>
            </nav>
        </footer>
    );
};
