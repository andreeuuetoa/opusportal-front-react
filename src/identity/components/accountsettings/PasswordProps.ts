import {PasswordData} from "../../DTO/PasswordData";
import {FormProps} from "../../../common/components/form/FormProps";

export interface PasswordProps extends FormProps {
    values: PasswordData;
}