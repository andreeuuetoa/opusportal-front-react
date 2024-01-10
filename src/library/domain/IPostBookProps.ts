import {BookData} from "../DTO/BookData";
import {FormProps} from "../../common/components/form/FormProps";

export interface IPostBookProps extends FormProps {
    bookData: BookData;
}
