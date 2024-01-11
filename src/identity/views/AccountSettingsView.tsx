import {useState} from "react";
import {FormPart} from "../../common/viewparts/FormPart";
import {CurrentPasswordValues} from "../components/accountsettings/CurrentPasswordValues";
import {PasswordProps} from "../components/accountsettings/PasswordProps";
import {ConfirmPasswordValues} from "../components/accountsettings/ConfirmPasswordValues";
import {NewPasswordValues} from "../components/accountsettings/NewPasswordValues";

export const AccountSettingsView = (passwordProps: PasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const currentPasswordValues = CurrentPasswordValues(passwordProps);
    const newPasswordValues = NewPasswordValues(passwordProps);
    const confirmPasswordValues = ConfirmPasswordValues(passwordProps);

    return (
        <form id="accountSettingsForm" method="post">
            <h2>Kasutaja sätted</h2>
            <div>
                <div className="float-child">
                    <ul style={{'display': passwordProps.validationErrors.length === 0 ? 'none' : ''}}>
                        <li>
                            {passwordProps.validationErrors.length > 0 ? passwordProps.validationErrors[0] : ''}
                        </li>
                    </ul>

                    <label className="fake-link" onClick={() => setShowPassword(true)}>Vaheta salasõna</label>
                    <br/>
                    {
                        showPassword &&
                        <>
                            <FormPart fieldElements={currentPasswordValues}/>
                            <FormPart fieldElements={newPasswordValues}/>
                            <FormPart fieldElements={confirmPasswordValues}/>
                        </>
                    }
                </div>
                <div className="float-child">
                    <button
                        onClick={(e) => passwordProps.onSubmit(e)}
                        id="registerSubmit" className="w-50 btn btn-lg submit-btn">Salvesta muudatused</button>
                </div>
            </div>
        </form>
    );
}
