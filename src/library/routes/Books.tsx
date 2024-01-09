import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {BookAPI} from "../API/BookAPI";
import {BookData} from "../DTO/BookData";
import {BooksTable} from "../views/BooksTable";
import {Link} from "react-router-dom";


export const Books = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const bookAPI = new BookAPI(setJWTResponse!);

    const [data, setData] = useState([] as BookData[]);

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
            </div>
        </>
    );
};
