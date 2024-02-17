import {CreateConcertView} from "../views/CreateConcertView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {ConcertData} from "../DTO/ConcertData";
import {ConcertAPI} from "../API/ConcertAPI";
import {useNavigate, useParams} from "react-router-dom";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const CreateConcert = () => {
    const [values, setValues] = useState({
        name: "",
        location: "",
        competitionId: undefined
    } as ConcertData);

    const {competitionId} = useParams();
    if (competitionId !== undefined) {
        values.competitionId = competitionId;
    }

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const concertAPI = new ConcertAPI(setJWTResponse!);
    const navigate = useNavigate();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.name.length === 0) {
            setValidationErrors(["Kontserdi nimi ei saa olla tühi!"]);
            return;
        }

        if (values.location.length === 0) {
            setValidationErrors(["Kontserdi asukoht ei saa olla tühi!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        if (JWTResponse === null) {
            setValidationErrors(["No JWT!"]);
            return;
        }
        await concertAPI.create(values, JWTResponse);

        if (competitionId !== undefined) {
            console.log("ID on olemas!");
            navigate("/konkursid");
        }

        navigate("/kontserdid");
    };

    return (
        <>
            <AdminNavbar/>
            <CreateConcertView values={values} handleChange={handleChange} onSubmit={onSubmit}
                               validationErrors={validationErrors}/>
        </>
    );
}
