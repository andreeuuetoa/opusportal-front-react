import {EditConcertView} from "../views/EditConcertView";
import React, {useContext, useState} from "react";
import {ConcertData} from "../DTO/ConcertData";
import {JWTContext} from "../../root/Root";
import {IdentityAPI} from "../../identity/API/IdentityAPI";
import {ConcertAPI} from "../API/ConcertAPI";

export const EditConcert = () => {
    const [values, setValues] = useState({
        name: "",
        location: ""
    } as ConcertData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const concertAPI = new ConcertAPI(setJWTResponse!);

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.name.length === 0 ||
            values.location.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

    };
    return (
        <EditConcertView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
