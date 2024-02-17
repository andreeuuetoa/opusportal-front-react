import {EditConcertView} from "../views/EditConcertView";
import React, {useContext, useState} from "react";
import {ConcertData} from "../DTO/ConcertData";
import {JWTContext} from "../../root/Root";
import {ConcertAPI} from "../API/ConcertAPI";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";
import {useParams} from "react-router-dom";

export const EditConcert = () => {
    const {id} = useParams();

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

        if (JWTResponse === null) {
            setValidationErrors(["No JWT!"]);
            return;
        }
        const updatedRoom = await concertAPI.update(id!, values, JWTResponse);

        if (updatedRoom === undefined) {
            setValidationErrors(["Oops, something went wrong. Unable to update user."]);
            return;
        }
    };
    return (
        <>
            <AdminNavbar/>
            <EditConcertView values={values} handleChange={handleChange} onSubmit={onSubmit}
                             validationErrors={validationErrors}/>
        </>
    );
}
