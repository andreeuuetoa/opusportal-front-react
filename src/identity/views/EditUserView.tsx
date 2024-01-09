import {FormPart} from "../../common/viewparts/FormPart";
import {EmailValues} from "../components/usermanagement/EmailValues";
import {FirstNameValues} from "../components/usermanagement/FirstNameValues";
import {LastNameValues} from "../components/usermanagement/LastNameValues";
import {EditUserProps} from "../components/usermanagement/EditUserProps";

export const EditUserView = (userProps: EditUserProps) => {
    const emailValues = EmailValues(userProps);
    const firstNameValues = FirstNameValues(userProps);
    const lastNameValues = LastNameValues(userProps);

    return (
        <form id="registerForm" method="post" action="/src/identity/Account/Register">
            <h2>Muuda kasutajat</h2>
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
                        Salvesta muudatused
                    </button>
                </div>
            </div>
        </form>
    );
}
