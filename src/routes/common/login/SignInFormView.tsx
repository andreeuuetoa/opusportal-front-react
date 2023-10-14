import {ISignInProps} from "./ISignInProps";
import {IdentityFormPart} from "../../../components/IdentityForm/IdentityFormPart";
import {Link} from "react-router-dom";
import React from "react";

export const SignInFormView = (props: ISignInProps) => {
    const eventHandler = (e: React.ChangeEvent) => {props.handleChange(e.target as EventTarget & HTMLInputElement)};

    return (
        <div className="container sign-in-page">
            <div className="sign-in-header">
                <img src="assets/logo/logo-en-black.svg" alt="OpusPortal Estonian logo"/>
                <br/>
                <i>OpusPortal</i>
            </div>
            <form id="loginForm" method="post" action="/Identity/Account/Login">
                <hr/>

                <ul style={{'display': props.validationErrors.length === 0 ? 'none' : ''}}>
                    <li>
                        {props.validationErrors.length > 0 ? props.validationErrors[0] : ''}
                    </li>
                </ul>

                <IdentityFormPart fieldElements={{
                    value: props.values.email,
                    type: "email",
                    placeholder: "Email",
                    autocomplete: "username",
                    name: "email",
                    onchange: eventHandler
                }} />
                <IdentityFormPart fieldElements={{
                    value: props.values.password,
                    type: "password",
                    placeholder: "Password",
                    autocomplete: "new-password",
                    name: "password",
                    onchange: eventHandler
                }} />
                <button
                    onClick={(e) => props.onSubmit(e)}
                    id="registerSubmit" className="btn btn-lg sign-in-btn">
                    Sign in
                </button>
            </form>
            <br/>
                <Link to="/about">
                    <button className="btn btn-lg about-btn">Teave</button>
                </Link>
        </div>
    );
}
