import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";
import {CompetitionData} from "../DTO/CompetitionData";
import {CompetitionAPI} from "../API/CompetitionAPI";
import {CreateCompetitionView} from "../views/CreateCompetitionView";

export const CreateCompetition = () => {
    const [values, setValues] = useState({
        name: "",
        rounds: []
    } as CompetitionData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {setJWTResponse} = useContext(JWTContext);

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

        await competitionAPI.create(values);

        navigate("/konkursid");
    };

    return (
        <CreateCompetitionView values={values} handleChange={handleChange} onSubmit={onSubmit}
                           validationErrors={validationErrors}/>
    );
}
