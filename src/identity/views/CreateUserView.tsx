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

            <div>
                <div className="float-child">
                    <FormPart fieldElements={emailValues} />
                    <FormPart fieldElements={firstNameValues} />
                    <FormPart fieldElements={lastNameValues} />
                    <FormPart fieldElements={passwordValues} />
                    <FormPart fieldElements={confirmPasswordValues} />
                    <div className="user-addition-page-roles">
                        <label className="float-child" htmlFor={"input_roleName"}>Roll kasutajal:</label>
                        <div className="float-child">
                            <input type="radio" value="student" name="userRole" />Õpilane<br/>
                            <input type="radio" value="teacher" name="userRole" />Õpetaja<br/>
                            <input type="radio" value="other" name="userRole" />Muu
                        </div>
                    </div>
                </div>
                <div className="float-child">
                <button
                    onClick={(e) => userProps.onSubmit(e)}
                    id="registerSubmit" className="w-50 btn btn-lg submit-btn">
                    Loo kasutaja
                </button>
                </div>
            </div>
        </form>
    );
}
