import {CreateUserView} from "../views/CreateUserView";
import React, {useContext, useState} from "react";
import {UserData} from "../DTO/UserData";
import {IdentityAPI} from "../services/IdentityAPI";
import {JWTContext} from "../../root/Root";

export const CreateUser = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as UserData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const identityService = new IdentityAPI();

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
        <CreateUserView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
