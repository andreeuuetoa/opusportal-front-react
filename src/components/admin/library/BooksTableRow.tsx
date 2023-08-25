import {IBook} from "../../../domain/contracts/IBook";

export const BooksTableRow = (book: IBook) => {
    return (
        <>
            <td>
                {book.name}
            </td>
            <td>
                {book.authors}
            </td>
            <td>
                {book.yearReleased}
            </td>
        </>
    );
}