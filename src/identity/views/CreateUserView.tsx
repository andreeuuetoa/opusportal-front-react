import {RegisterUserProps} from "../components/usermanagement/RegisterUserProps";
import {FormPart} from "../../common/viewparts/FormPart";
import React from "react";
import {EmailValues} from "../components/usermanagement/EmailValues";
import {PasswordValues} from "../components/usermanagement/PasswordValues";
import {ConfirmPasswordValues} from "../components/usermanagement/ConfirmPasswordValues";
import {FirstNameValues} from "../components/usermanagement/FirstNameValues";
import {LastNameValues} from "../components/usermanagement/LastNameValues";

export const CreateUserView = (userProps: RegisterUserProps) => {
    const emailValues = EmailValues(userProps);
    const passwordValues = PasswordValues(userProps);
    const confirmPasswordValues = ConfirmPasswordValues(userProps);
    const firstNameValues = FirstNameValues(userProps);
    const lastNameValues = LastNameValues(userProps);

    return (
        <form id="registerForm" method="post" action="/src/identity/Account/Register">
            <h2>Loo uus kasutaja</h2>
            <hr/>

            <ul style={{'display': userProps.validationErrors.length === 0 ? 'none' : ''}}>
                <li>
                    {userProps.validationErrors.length > 0 ? userProps.validationErrors[0] : ''}
                </li>
            </ul>

            <div>
                <div className="float-child">
                    <FormPart fieldElements={emailValues}/>
                    <FormPart fieldElements={firstNameValues}/>
                    <FormPart fieldElements={lastNameValues}/>
                    <FormPart fieldElements={passwordValues}/>
                    <FormPart fieldElements={confirmPasswordValues}/>
                    <div className="user-addition-page-roles">
                        <label className="float-child" htmlFor={"input_roleName"}>Roll kasutajal:</label>
                        <div className="float-child">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="student" value="student"
                                       name="userRole"/>
                                <label className="form-check-label" htmlFor="student">Õpilane</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="teacher" value="teacher"
                                       name="userRole"/>
                                <label className="form-check-label" htmlFor="teacher">Õpetaja</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="other" value="other"
                                       name="userRole"/>
                                <label className="form-check-label" htmlFor="other">Muu</label>
                            </div>
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
