import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {BookAPI} from "../API/BookAPI";
import {IBook} from "../DTO/IBook";
import {BooksTable} from "../viewparts/BooksTable";
import {Link} from "react-router-dom";


export const Books = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const bookAPI = new BookAPI(setJWTResponse!);

    const [data, setData] = useState([] as IBook[]);

    useEffect(() => {
        if (JWTResponse) {
            bookAPI.getAll(JWTResponse).then(
                response => {
                    console.log(response);
                    if (response) {
                        setData(response);
                    } else {
                        // TODO: Delete JWT and redirect to sign-in page
                        setData([]);
                    }
                }
            );
        }
    }, []);

    console.log(data);

    return (
        <>
            <div className="float-child">
                <br/>
                <BooksTable books={data}/>
            </div>
            <div className="float-child">
                <br/>
                <Link to="/lisa-raamat">
                    <button className="btn link-btn">Lisa raamat</button>
                </Link>
                <br/>
                <br/>
                <Link to="/muuda-raamatut">
                    <button className="btn link-btn">Muuda raamatut</button>
                </Link>
                <br/>
                <br/>
                <Link to="/kustuta-raamat">
                    <button className="btn link-btn">Kustuta raamat</button>
                </Link>
                <br/>
                <br/>
                <Link to="/laenuta-raamat">
                    <button className="btn link-btn">Laenuta raamat</button>
                </Link>
                <br/>
                <br/>
                <Link to="/tagasta-raamat">
                    <button className="btn link-btn">Tagasta raamat</button>
                </Link>
            </div>
        </>
    );
};
