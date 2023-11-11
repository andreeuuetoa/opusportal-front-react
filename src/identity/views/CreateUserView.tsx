import {UserProps} from "../components/register/UserProps";
import {FormPart} from "../../common/viewparts/FormPart";
import React from "react";
import {EmailValues} from "../components/register/EmailValues";
import {PasswordValues} from "../components/register/PasswordValues";
import {ConfirmPasswordValues} from "../components/register/ConfirmPasswordValues";
import {FirstNameValues} from "../components/register/FirstNameValues";
import {LastNameValues} from "../components/register/LastNameValues";
import {RoleValues} from "../components/register/RoleValues";

export const CreateUserView = (userProps: UserProps) => {
    const emailValues = EmailValues(userProps);
    const passwordValues = PasswordValues(userProps);
    const confirmPasswordValues = ConfirmPasswordValues(userProps);
    const firstNameValues = FirstNameValues(userProps);
    const lastNameValues = LastNameValues(userProps);
    // TODO: Does not get the value from the backend! Default: "Student"
    const roleValues = RoleValues(userProps);

    return (
        <form id="registerForm" method="post" action="/src/identity/Account/Register">
            <h2>Loo uus kasutaja.</h2>
            <hr/>

            <ul style={{'display': userProps.validationErrors.length === 0 ? 'none' : ''}}>
                <li>
                    {userProps.validationErrors.length > 0 ? userProps.validationErrors[0] : ''}
                </li>
            </ul>

            <FormPart fieldElements={emailValues} />
            <FormPart fieldElements={passwordValues} />
            <FormPart fieldElements={confirmPasswordValues} />
            <FormPart fieldElements={firstNameValues} />
            <FormPart fieldElements={lastNameValues} />
            <FormPart fieldElements={roleValues} />
            <button
                onClick={(e) => userProps.onSubmit(e)}
                id="registerSubmit" className="w-100 btn btn-lg btn-primary">
                Register
            </button>
        </form>
    );
}
