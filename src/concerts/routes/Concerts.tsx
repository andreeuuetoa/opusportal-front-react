import {ConcertsTable} from "../viewparts/ConcertsTable";
import {Link} from "react-router-dom";
import {useState} from "react";
import {ConcertData} from "../DTO/ConcertData";

export const Concerts = () => {
    const [data, setData] = useState([] as ConcertData[]);

    return (
        <>
            <ConcertsTable concerts={data}/>
            <button><Link to="/lisa-kontsert">Lisa kontsert</Link></button>
            <button><Link to="/muuda-kontserti">Muuda kontserti</Link></button>
            <button><Link to="/kustuta-kontsert">Kustuta kontsert</Link></button>
        </>
    );
}
