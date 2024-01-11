import {EditUserView} from "../views/EditUserView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {useParams} from "react-router-dom";
import {UserAPI} from "../API/UserAPI";
import {UserDataToEdit} from "../DTO/UserDataToEdit";

export const EditUser = () => {
    const { id } = useParams();

    const [newUserData, setNewUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as UserDataToEdit);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setNewUserData({...newUserData, [target.name]: target.value});
    };

    const {setJWTResponse} = useContext(JWTContext);

    const userAPI = new UserAPI(setJWTResponse!);

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (newUserData.firstName.length === 0) {
            setValidationErrors(["Kasutaja eesnimi ei saa olla tühi!"]);
            return;
        }

        if (newUserData.lastName.length === 0) {
            setValidationErrors(["Kasutaja perenimi ei saa olla tühi!"]);
            return;
        }

        if (newUserData.email.length === 0) {
            setValidationErrors(["Kasutaja meiliaadress ei saa olla tühi!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        if (id === undefined) {
            setValidationErrors(["Vabandust. Kasutajat, keda taheti uuendada, ei ole valitud."]);
            return;
        }
        const updatedUser = await userAPI.updateUser(id, newUserData);

        if (updatedUser === undefined) {
            setValidationErrors(["Vabandust, midagi läks valesti. Kasutajat ei saadud uuendada."]);
            return;
        }
    };

    return (
        <EditUserView newUserData={newUserData} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
