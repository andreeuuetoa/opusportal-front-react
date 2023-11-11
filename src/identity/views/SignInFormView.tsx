import {SignInProps} from "../components/signin/SignInProps";
import {FormPart} from "../../common/components/form/FormPart";
import {Link} from "react-router-dom";
import React from "react";
import {EmailValues} from "../components/signin/EmailValues";
import {PasswordValues} from "../components/signin/PasswordValues";

export const SignInFormView = (signInProps: SignInProps) => {
    const emailValues = EmailValues(signInProps);
    const passwordValues = PasswordValues(signInProps);

    return (
        <div className="container sign-in-page">
            <div className="sign-in-header">
                <img src="assets/logo/logo-en-black.svg" alt="OpusPortal Estonian logo"/>
                <br/>
                <i>OpusPortal</i>
            </div>
            <form id="loginForm" method="post" action="/src/identity/Account/Login">
                <hr/>

                <ul style={{'display': signInProps.validationErrors.length === 0 ? 'none' : ''}}>
                    <li>
                        {signInProps.validationErrors.length > 0 ? signInProps.validationErrors[0] : ''}
                    </li>
                </ul>

                <FormPart fieldElements={emailValues} />
                <FormPart fieldElements={passwordValues} />
                <button
                    onClick={(e) => signInProps.onSubmit(e)}
                    id="registerSubmit" className="btn btn-lg submit-btn">
                    Logi sisse
                </button>
            </form>
            <br/>
                <Link to="/teave">
                    <button className="btn btn-lg about-btn">Teave</button>
                </Link>
        </div>
    );
}
