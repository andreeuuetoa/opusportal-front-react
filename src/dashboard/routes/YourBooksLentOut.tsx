import YourBooksLentOutTable from "../viewparts/bookslentout/YourBooksLentOutTable";
import {useContext, useEffect, useState} from "react";
import BookLentOutData from "../DTO/BookLentOutData";
import {JWTContext} from "../../root/Root";
import BooksLentOutAPI from "../API/BooksLentOutAPI";

const YourBooksLentOut = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const [booksLentOut, setBooksLentOut] = useState([] as BookLentOutData[]);

    const booksLentOutAPI = new BooksLentOutAPI(setJWTResponse!);

    useEffect(() => {
        if (JWTResponse) {
            booksLentOutAPI.getAllWithUserId(JWTResponse).then(
                response => {
                    if (response) {
                        setBooksLentOut(response);
                    } else {
                        // TODO: Delete JWT and redirect to sign-in page
                        setBooksLentOut([]);
                    }
                }
            );
        }
    }, []);

    return (
        <YourBooksLentOutTable booksLentOut={booksLentOut}/>
    );
}

export default YourBooksLentOut;
