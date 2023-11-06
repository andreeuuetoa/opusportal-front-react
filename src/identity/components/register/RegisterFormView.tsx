import {IRegisterProps} from "./IRegisterProps";
import {IdentityFormPart} from "../identityform/IdentityFormPart";
import React from "react";

export const RegisterFormView = (props: IRegisterProps) => {
    const eventHandler = (e: React.ChangeEvent) => {props.handleChange(e.target as EventTarget & HTMLInputElement)};

    return (
        <form id="registerForm" method="post" action="/Identity/Account/Register">
            <h2>Create a new account.</h2>
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
            <IdentityFormPart fieldElements={{
                value: props.values.confirmPassword,
                type: "password",
                placeholder: "Confirm password",
                autocomplete: "confirm-password",
                name: "confirmPassword",
                onchange: eventHandler
            }} />
            <IdentityFormPart fieldElements={{
                value: props.values.firstName,
                type: "text",
                placeholder: "First name",
                autocomplete: "firstname",
                name: "firstName",
                onchange: eventHandler
            }} />
            <IdentityFormPart fieldElements={{
                value: props.values.lastName,
                type: "text",
                placeholder: "Last name",
                autocomplete: "lastname",
                name: "lastName",
                onchange: eventHandler
            }} />
            TODO: Does not get value from the backend! Default: "Student"
            <IdentityFormPart fieldElements={{
                value: props.values.roleName,
                type: "text",
                placeholder: "Role",
                autocomplete: "rolename",
                name: "roleName",
                onchange: eventHandler
            }} />
            <button
                onClick={(e) => props.onSubmit(e)}
                id="registerSubmit" className="w-100 btn btn-lg btn-primary">
                Register
            </button>
        </form>
    );
}
