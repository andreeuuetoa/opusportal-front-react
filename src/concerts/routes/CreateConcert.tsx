import {CreateConcertView} from "../views/CreateConcertView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {ConcertData} from "../DTO/ConcertData";
import {ConcertAPI} from "../API/ConcertAPI";
import {useNavigate} from "react-router-dom";

export const CreateConcert = () => {
    const [values, setValues] = useState({
        name: "",
        location: ""
    } as ConcertData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {setJWTResponse} = useContext(JWTContext);

    const concertAPI = new ConcertAPI(setJWTResponse!);
    const navigate = useNavigate();

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

        navigate("/kontserdid");
    };

    return (
        <CreateConcertView values={values} handleChange={handleChange} onSubmit={onSubmit}
                           validationErrors={validationErrors}/>
    );
}
