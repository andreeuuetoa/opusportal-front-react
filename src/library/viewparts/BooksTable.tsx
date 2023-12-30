import {IGetBooksProps} from "../domain/IGetBooksProps";
import {BooksTableRow} from "./BooksTableRow";

export const BooksTable = (books: IGetBooksProps) => {
    return (
        <>
            <div className="table-row">
            <th>
                <td>
                    Raamatu nimi
                </td>
                <td>
                    Autorid
                </td>
                <td>
                    Laenutaja
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
