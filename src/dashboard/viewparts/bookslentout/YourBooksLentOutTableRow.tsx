import BookLentOutData from "../../DTO/BookLentOutData";
import MonthValue from "../../domain/MonthValue";

const YourBooksLentOutTableRow = (bookLentOutData: BookLentOutData) => {
    return (
        <>
            <td>{bookLentOutData.book.title}</td>
            <td>{bookLentOutData.book.authors}</td>
            <td>{bookLentOutData.returnAt.getUTCDate()}. {MonthValue(bookLentOutData.returnAt.getUTCMonth())} {bookLentOutData.returnAt.getUTCFullYear()}</td>
        </>
    );
}

export default YourBooksLentOutTableRow;
