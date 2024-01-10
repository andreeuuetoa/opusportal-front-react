import {IPostBookProps} from "../domain/IPostBookProps";
import {FormPart} from "../../common/viewparts/FormPart";
import BookValues from "../components/BookValues";
import AuthorsValues from "../components/AuthorsValues";

export const AddBookView = (bookProps: IPostBookProps) => {
    const bookValues = BookValues(bookProps);
    const authorsValues = AuthorsValues(bookProps);

    return (
        <div className="w-50">
            <form id="add-book-form" method="post">
                <h2>Lisa raamat</h2>
                <hr/>

                <ul style={{'display': bookProps.validationErrors.length === 0 ? 'none' : ''}}>
                    <li>
                        {bookProps.validationErrors.length > 0 ? bookProps.validationErrors[0] : ''}
                    </li>
                </ul>

                <FormPart fieldElements={bookValues}/>
                <FormPart fieldElements={authorsValues}/>
                <button
                    onClick={(e) => bookProps.onSubmit(e)}
                    className="w-100 btn btn-lg submit-btn">
                    Lisa raamat
                </button>
            </form>
        </div>
    );
}
