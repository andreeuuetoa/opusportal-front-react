import {IGetBooksProps} from "../domain/IGetBooksProps";
import {BooksTableRow} from "../viewparts/BooksTableRow";
import {BooksTableHeader} from "../viewparts/BooksTableHeader";

export const BooksTable = (books: IGetBooksProps) => {
    return (
        <>
            <div className="table">
                <table>
                    <BooksTableHeader />
                    <tbody>
                    {
                        books.books.map(b => (
                            <tr><BooksTableRow title={b.title} authors={b.authors}/></tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
