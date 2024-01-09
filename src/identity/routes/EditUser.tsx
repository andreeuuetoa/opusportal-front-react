import {EditUserView} from "../views/EditUserView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {useParams} from "react-router-dom";
import {UserAPI} from "../API/UserAPI";
import {UserDataToEdit} from "../DTO/UserDataToEdit";

export const EditUser = () => {
    const { id } = useParams();

    const [values, setValues] = useState({
        email: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as UserDataToEdit);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {setJWTResponse} = useContext(JWTContext);

    const userAPI = new UserAPI(setJWTResponse!);

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.firstName.length === 0 ||
            values.lastName.length === 0 ||
            values.email.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        const updatedUser = await userAPI.updateUser(id!, values);

        if (updatedUser === undefined) {
            setValidationErrors(["Oops, something went wrong. Unable to update user."]);
            return;
        }
    };

    return (
        <EditUserView values={values} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
