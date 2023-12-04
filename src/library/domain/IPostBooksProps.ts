import {IBook} from "../DTO/IBook";
import {FormProps} from "../../common/components/form/FormProps";

export interface IPostBooksProps extends FormProps {
    bookData: IBook;
}
