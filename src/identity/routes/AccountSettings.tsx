import {AccountSettingsView} from "../views/AccountSettingsView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {IdentityAPI} from "../API/IdentityAPI";
import {PasswordData} from "../DTO/PasswordData";

export const AccountSettings = () => {
    const [values, setValues] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    } as PasswordData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const identityService = new IdentityAPI();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.currentPassword.length === 0 ||
            values.newPassword.length === 0 ||
            values.confirmPassword.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

    };
    return (
        <AccountSettingsView values={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}
