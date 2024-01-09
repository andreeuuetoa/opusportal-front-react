import {BookData} from "../DTO/BookData";
import {FormProps} from "../../common/components/form/FormProps";

export interface IPostBooksProps extends FormProps {
    bookData: BookData;
}
