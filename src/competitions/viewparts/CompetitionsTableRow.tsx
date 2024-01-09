import {CompetitionData} from "../DTO/CompetitionData";
import {Link} from "react-router-dom";

export const CompetitionsTableRow = (competition: CompetitionData) => {
    return (
        <>
            <td>
                {competition.name}
            </td>
            <td>
                {
                    competition.rounds.map(round => (
                        <p>{round.location}: {round.startTime}</p>
                    ))
                }
            </td>
            <td><Link to="/muuda-kasutajat">Muuda</Link></td>
            <td><Link className="delete-link" to="/kustuta-kasutaja">Kustuta</Link></td>
        </>
    );
}
