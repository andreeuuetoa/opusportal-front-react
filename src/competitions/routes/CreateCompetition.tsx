import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";
import {CompetitionData} from "../DTO/CompetitionData";
import {CompetitionAPI} from "../API/CompetitionAPI";
import {CreateCompetitionView} from "../views/CreateCompetitionView";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const CreateCompetition = () => {
    const [values, setValues] = useState({
        name: "",
        rounds: []
    } as CompetitionData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const competitionAPI = new CompetitionAPI(setJWTResponse!);
    const navigate = useNavigate();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.name.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        if (JWTResponse === null) {
            setValidationErrors(["No JWT!"]);
            return;
        }
        await competitionAPI.create(values, JWTResponse);

        navigate("/konkursid");
    };

    return (
        <>
            <AdminNavbar/>
            <CreateCompetitionView values={values} handleChange={handleChange} onSubmit={onSubmit}
                                   validationErrors={validationErrors}/>
        </>
    );
}
