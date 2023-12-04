import {ConcertData} from "../DTO/ConcertData";
import {FormProps} from "../../common/components/form/FormProps";

export interface ConcertProps extends FormProps {
    values: ConcertData;
}