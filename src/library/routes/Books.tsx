import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {BookService} from "../services/BookService";
import {IBook} from "../DTO/IBook";
import {BooksTable} from "../components/BooksTable";
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
            <BooksTable books={data}/>
            <button><Link to="/lisa-raamat">Lisa raamat</Link></button>
            <button><Link to="/muuda-raamatut">Muuda raamatut</Link></button>
            <button><Link to="/kustuta-raamat">Kustuta raamat</Link></button>
            <button><Link to="/laenuta-raamat">Laenuta raamat</Link></button>
            <button><Link to="/tagasta-raamat">Tagasta raamat</Link></button>
        </>
    );
};
