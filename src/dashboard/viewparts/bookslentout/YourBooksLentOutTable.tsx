import YourBooksLentOutTableHeader from "./YourBooksLentOutTableHeader";
import {IGetBooksLentOutProps} from "../../domain/IGetBooksLentOutProps";
import YourBooksLentOutTableRow from "./YourBooksLentOutTableRow";

const YourBooksLentOutTable = (booksLentOut: IGetBooksLentOutProps) => {
    return (
        <div className="dashboard-table">
            <table>
                <YourBooksLentOutTableHeader/>
                <tbody>
                {
                    booksLentOut.booksLentOut.map(bookLentOut => (
                        <tr><YourBooksLentOutTableRow book={bookLentOut.book} returnAt={bookLentOut.returnAt}/></tr>))
                }
                </tbody>
            </table>
        </div>
    );
}

export default YourBooksLentOutTable;
