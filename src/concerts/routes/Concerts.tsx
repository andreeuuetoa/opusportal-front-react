import {ConcertsTable} from "../viewparts/ConcertsTable";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ConcertData} from "../DTO/ConcertData";
import {JWTContext} from "../../root/Root";
import {ConcertAPI} from "../API/ConcertAPI";

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
            <ConcertsTable concerts={data}/>
            <button><Link to="/lisa-kontsert">Lisa kontsert</Link></button>
            <button><Link to="/muuda-kontserti">Muuda kontserti</Link></button>
            <button><Link to="/kustuta-kontsert">Kustuta kontsert</Link></button>
        </>
    );
}
