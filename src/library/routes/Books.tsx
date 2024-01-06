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
            <BooksTable books={data}/>
            <Link to="/lisa-raamat"><button>Lisa raamat</button></Link>
            <Link to="/muuda-raamatut"><button>Muuda raamatut</button></Link>
            <Link to="/kustuta-raamat"><button>Kustuta raamat</button></Link>
            <Link to="/laenuta-raamat"><button>Laenuta raamat</button></Link>
            <Link to="/tagasta-raamat"><button>Tagasta raamat</button></Link>
        </>
    );
};
