import {IGetBooksProps} from "../domain/IGetBooksProps";
import {BooksTableRow} from "./BooksTableRow";

export const BooksTable = (books: IGetBooksProps) => {
    return (
        <>
            <div className="table-row">
            <th>
                <td>
                    Book name
                </td>
                <td>
                    Authors
                </td>
                <td>
                    Year released
                </td>
            </th>
            <table>
                {
                    books.books.map(b => (<tr> <BooksTableRow name={b.name} authors={b.authors} yearReleased={b.yearReleased}/> </tr>))
                }
            </table>
            </div>
        </>
    );
}
