import React, {useContext, useState} from "react";
import {ISignInData} from "../../../DTO/ISignInData";
import {SignInFormView} from "../../../components/login/SignInFormView";
import {JWTContext} from "../../Root";
import {IdentityService} from "../../../services/IdentityService";
import {Link, useNavigate} from "react-router-dom";

export const SignIn = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: ""
    } as ISignInData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const identityService = new IdentityService();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.email.length === 0 ||
            values.password.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        // Register the user, get JWT and refresh token
        const JWTData = await identityService.signIn(values);

        if (JWTData === undefined) {
            setValidationErrors(["No JWT!"]);
            return;
        }

        if (setJWTResponse) {
            setJWTResponse(JWTData);
            if (JWTData.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
        }
    };

    return (
        <div className="container">
            <SignInFormView values={values} handleChange={handleChange} onSubmit={onSubmit}
                            validationErrors={validationErrors}/>
        </div>
    );
}
