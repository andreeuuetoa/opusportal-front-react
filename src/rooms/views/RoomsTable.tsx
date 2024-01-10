import {IGetRoomsProps} from "../domain/IGetRoomsProps";
import RoomsTableRow from "../viewparts/RoomsTableRow";
import RoomsTableHeader from "../viewparts/RoomsTableHeader";

const RoomsTable = (rooms: IGetRoomsProps) => {
    return (
        <>
            <div className="table">
                <table>
                    <RoomsTableHeader/>
                    <tbody>
                    {
                        rooms.rooms.map(room => (
                            <RoomsTableRow roomNumber={room.roomNumber} />))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RoomsTable;
