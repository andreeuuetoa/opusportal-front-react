import {ConcertsTable} from "../views/ConcertsTable";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ConcertData} from "../DTO/ConcertData";
import {JWTContext} from "../../root/Root";
import {ConcertAPI} from "../API/ConcertAPI";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const Concerts = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const concertAPI = new ConcertAPI(setJWTResponse!);

    const [data, setData] = useState([] as ConcertData[]);

    useEffect(() => {
        if (JWTResponse) {
            concertAPI.getAll(JWTResponse).then(
                response => {
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

    return (
        <>
            <AdminNavbar/>
            <div className="float-child">
                <br/>
                <ConcertsTable concerts={data}/>
            </div>
            <div className="float-child">
                <br/>
                <Link to="/lisa-kontsert">
                    <button className="btn link-btn">Lisa kontsert</button>
                </Link>
            </div>
        </>
    );
}
