import {ConcertData} from "../DTO/ConcertData";

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
        </>
    );
}
