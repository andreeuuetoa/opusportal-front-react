import {CreateUserView} from "../views/CreateUserView";
import React, {useContext, useEffect, useState} from "react";
import {RegisterData} from "../DTO/RegisterData";
import {IdentityAPI} from "../API/IdentityAPI";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";
import {UserData} from "../DTO/UserData";
import {UserAPI} from "../API/UserAPI";

export const CreateUser = () => {
    const [newUserData, setNewUserData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        roleName: ""
    } as RegisterData);

    const [teachers, setTeachers] = useState([] as UserData[]);

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const userAPI = new UserAPI(setJWTResponse!);
    useEffect(() => {
        if (JWTResponse) {
            userAPI.getTeachers(JWTResponse).then(
                response => {
                    if (response) {
                        setTeachers(response);
                    } else {
                        // TODO: Delete JWT and redirect to sign-in page
                        setTeachers([]);
                    }
                }
            );
        }
    }, []);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setNewUserData({...newUserData, [target.name]: target.value});
    };

    const identityAPI = new IdentityAPI();
    const navigate = useNavigate();

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

        if (newUserData.password.length === 0) {
            setValidationErrors(["Kasutajal peab olema salasõna!"]);
            return;
        }

        if (newUserData.password !== newUserData.confirmPassword) {
            setValidationErrors(["Salasõnad ei ühti!"]);
            return;
        }

        if (newUserData.roleName === "Student" && newUserData.majorTeacher === undefined) {
            setValidationErrors(["Õpilasel peab olema erialaõpetaja!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        await identityAPI.register(newUserData);

        navigate("/kasutajad");
    };

    return (
        <CreateUserView newUserData={newUserData} teachers={teachers} handleChange={handleChange} onSubmit={onSubmit} validationErrors={validationErrors}/>
    );
}
