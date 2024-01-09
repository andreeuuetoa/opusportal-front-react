import {ConcertData} from "../DTO/ConcertData";
import {Link} from "react-router-dom";

export const ConcertsTableRow = (concert: ConcertData) => {
    return (
        <>
            <td>
                {concert.name}
            </td>
            <td>
                {concert.location}
            </td>
            <td>
                {concert.startTime}
            </td>
            <td>
                {concert.endTime}
            </td>
            <td><Link to="/muuda-kasutajat">Muuda</Link></td>
            <td><Link className="delete-link" to="/kustuta-kasutaja">Kustuta</Link></td>
        </>
    );
}
