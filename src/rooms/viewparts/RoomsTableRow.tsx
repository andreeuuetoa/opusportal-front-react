import {RoomData} from "../DTO/RoomData";

const RoomsTableRow = (room: RoomData) => {
    return (
        <tr>
            <td>{room.roomNumber}</td>
        </tr>
    );
}

export default RoomsTableRow;
