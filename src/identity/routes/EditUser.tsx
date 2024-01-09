import {EditUserView} from "../views/EditUserView";
import React, {useContext, useState} from "react";
import {RegisterData} from "../DTO/RegisterData";
import {JWTContext} from "../../root/Root";
import {IdentityAPI} from "../API/IdentityAPI";
import {useParams} from "react-router-dom";

export const EditUser = () => {
    const { id } = useParams();

    const identityService = new IdentityAPI();

    const user = identityService.getUserById(id);

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as RegisterData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

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
        <EditUserView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
