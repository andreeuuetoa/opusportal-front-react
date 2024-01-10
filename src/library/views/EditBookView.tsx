import {BookProps} from "../domain/BookProps";
import BookValues from "../components/BookValues";
import AuthorsValues from "../components/AuthorsValues";
import {FormPart} from "../../common/viewparts/FormPart";

const EditBookView = (bookProps: BookProps) => {
    const bookValues = BookValues(bookProps);
    const authorsValues = AuthorsValues(bookProps);

    return (
        <div className="w-50">
            <form id="edit-book-form" method="put">
                <h2>Muuda raamatut</h2>
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
                    Muuda raamatut
                </button>
            </form>
        </div>
    );
}

export default EditBookView;
