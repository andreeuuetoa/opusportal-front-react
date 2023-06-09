import React, {useState} from "react";
import {ISignInProps} from "./ISignInProps";
import {IdentityFormPart} from "../IdentityFormPart";

export const SignInFormView = (props: ISignInProps) => {
    const eventHandler = (e: React.ChangeEvent) => {props.handleChange(e.target as EventTarget & HTMLInputElement)};

    return (
        <form id="loginForm" method="post" action="/Identity/Account/Login">
            <h2>Log in.</h2>
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
                id="registerSubmit" className="w-100 btn btn-lg btn-primary">
                Sign in
            </button>
        </form>
    );
}