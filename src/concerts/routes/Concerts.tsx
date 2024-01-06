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
            <Link to="/lisa-kontsert"><button>Lisa kontsert</button></Link>
            <Link to="/muuda-kontserti"><button>Muuda kontserti</button></Link>
            <Link to="/kustuta-kontsert"><button>Kustuta kontsert</button></Link>
        </>
    );
}
