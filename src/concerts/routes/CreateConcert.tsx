import {CreateConcertView} from "../views/CreateConcertView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {IdentityAPI} from "../../identity/API/IdentityAPI";
import {ConcertData} from "../DTO/ConcertData";
import {ConcertAPI} from "../API/ConcertAPI";

export const CreateConcert = () => {
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

        await concertAPI.create(values);
    };

    return (
        <CreateConcertView values={values} handleChange={handleChange} onSubmit={onSubmit}
                           validationErrors={validationErrors}/>
    );
}
