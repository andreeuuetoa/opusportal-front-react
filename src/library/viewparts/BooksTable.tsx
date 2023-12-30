import {IGetBooksProps} from "../domain/IGetBooksProps";
import {BooksTableRow} from "./BooksTableRow";
import {BooksTableHeader} from "./BooksTableHeader";

export const BooksTable = (books: IGetBooksProps) => {
    return (
        <>
            <div className="table-row">
                <table>
                    <BooksTableHeader />
                    <tbody>
                    {
                        books.books.map(b => (
                            <tr><BooksTableRow name={b.name} authors={b.authors} yearReleased={b.yearReleased}/></tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
