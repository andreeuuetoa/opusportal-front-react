import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../Root";
import {BookService} from "../../services/BookService";
import {IBook} from "../../domain/contracts/IBook";
import {BooksTable} from "../../components/admin/library/BooksTable";
import {Link} from "react-router-dom";


export const Books = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const bookService = new BookService(setJWTResponse!);

    const [data, setData] = useState([] as IBook[]);

    useEffect(() => {
        if (JWTResponse) {
            bookService.getAll(JWTResponse).then(
                response => {
                    console.log(response);
                    if (response) {
                        setData(response);
                    } else {
                        // TODO: Delete JWT and redirect to login page
                        setData([]);
                    }
                }
            );
        }
    }, []);

    console.log(data);

    return (
        <>
            <Link to="/BookForm">Add book</Link>
            <BooksTable books={data}/>
        </>
    );
};