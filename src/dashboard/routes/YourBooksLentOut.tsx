import YourBooksLentOutTable from "../viewparts/bookslentout/YourBooksLentOutTable";
import {useContext, useState} from "react";
import BookLentOutData from "../DTO/BookLentOutData";
import {JWTContext} from "../../root/Root";

const YourBooksLentOut = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const [booksLentOut, setBooksLentOut] = useState([] as BookLentOutData[]);

    return (
        <YourBooksLentOutTable booksLentOut={booksLentOut}/>
    );
}

export default YourBooksLentOut;
