import {RoomData} from "../DTO/RoomData";
import {Link} from "react-router-dom";

const RoomsTableRow = (room: RoomData) => {
    return (
        <tr>
            <td>{room.roomNumber}</td>
            <td>
                <Link to="/muuda-ruumi">Muuda</Link>
            </td>
            <td>
                <Link to="/kustuta-ruum">Kustuta</Link>
            </td>
        </tr>
    );
}

export default RoomsTableRow;
