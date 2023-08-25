import {RegisterFormView} from "../../components/admin/identity/register/RegisterFormView";
import React, {useContext, useState} from "react";
import {IRegisterData} from "../../DTO/IRegisterData";
import {IdentityService} from "../../services/IdentityService";
import {JWTContext} from "../Root";

export const Register = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as IRegisterData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const identityService = new IdentityService();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.firstName.length === 0 ||
            values.lastName.length === 0 ||
            values.email.length === 0 ||
            values.password.length === 0 ||
            values.password !== values.confirmPassword) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        // Register the user, get JWT and refresh token
        const JWTData = await identityService.register(values);

        if (JWTData === undefined) {
            // TODO: Get error info
            setValidationErrors(["No JWT!"]);
            return;
        }

        if (setJWTResponse) {
            setJWTResponse(JWTData);
        }
    };

    return (
        <RegisterFormView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}