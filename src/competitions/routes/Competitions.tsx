import {CompetitionsTable} from "../views/CompetitionsTable";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {ConcertAPI} from "../../concerts/API/ConcertAPI";
import {ConcertData} from "../../concerts/DTO/ConcertData";
import {CompetitionAPI} from "../API/CompetitionAPI";
import {CompetitionData} from "../DTO/CompetitionData";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const Competitions = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const concertAPI = new CompetitionAPI(setJWTResponse!);

    const [data, setData] = useState([] as CompetitionData[]);

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
                <CompetitionsTable competitions={data}/>
            </div>
            <div className="float-child">
                <br/>
                <Link to="/lisa-konkurss">
                    <button className="btn link-btn">Lisa konkurss</button>
                </Link>
            </div>
        </>
    );
}
