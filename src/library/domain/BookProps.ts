import {BookData} from "../DTO/BookData";
import {FormProps} from "../../common/components/form/FormProps";

export interface BookProps extends FormProps {
    bookData: BookData;
}
