import {CreateUserView} from "../views/CreateUserView";
import React, {useContext, useState} from "react";
import {RegisterData} from "../DTO/RegisterData";
import {IdentityAPI} from "../API/IdentityAPI";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";

export const CreateUser = () => {
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

    const identityAPI = new IdentityAPI();
    const navigate = useNavigate();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.firstName.length === 0) {
            setValidationErrors(["Kasutaja eesnimi ei saa olla tühi!"]);
            return;
        }

        if (values.lastName.length === 0) {
            setValidationErrors(["Kasutaja perenimi ei saa olla tühi!"]);
            return;
        }

        if (values.email.length === 0) {
            setValidationErrors(["Kasutaja meiliaadress ei saa olla tühi!"]);
            return;
        }

        if (values.password.length === 0) {
            setValidationErrors(["Kasutajal peab olema salasõna!"]);
            return;
        }

        if (values.password !== values.confirmPassword) {
            setValidationErrors(["Salasõnad ei ühti!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        await identityAPI.register(values);

        navigate("/kasutajad");
    };

    return (
        <CreateUserView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
