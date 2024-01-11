import {BookData} from "../DTO/BookData";
import {Link} from "react-router-dom";

export const BooksTableRow = (book: BookData) => {
    return (
        <>
            <td>
                {book.title}
            </td>
            <td>
                {book.authors}
            </td>
            <td>
                <Link to="/muuda-raamatut">Muuda</Link>
            </td>
            <td>
                <Link to="/kustuta-raamat">Kustuta</Link>
            </td>
            <td>
                <Link to="/laenuta-raamat">Laenuta</Link>
            </td>
            <td>
                <Link to="/tagasta-raamat">Tagasta</Link>
            </td>
        </>
    );
}
