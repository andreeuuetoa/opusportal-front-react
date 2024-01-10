import {EditRoomProps} from "../components/EditRoomProps";
import RoomNumberValues from "../components/RoomNumberValues";
import {FormPart} from "../../common/viewparts/FormPart";

const EditRoomView = (roomProps: EditRoomProps) => {
    const roomNumberValues = RoomNumberValues(roomProps);

    return (
        <div className="w-50">
            <form id="edit-room-form" method="put">
                <h2>Muuda ruumi</h2>
                <hr/>

                <ul style={{'display': roomProps.validationErrors.length === 0 ? 'none' : ''}}>
                    <li>
                        {roomProps.validationErrors.length > 0 ? roomProps.validationErrors[0] : ''}
                    </li>
                </ul>

                <FormPart fieldElements={roomNumberValues}/>
                <button
                    onClick={(e) => roomProps.onSubmit(e)}
                    className="w-100 btn btn-lg submit-btn">
                    Muuda ruumi
                </button>
            </form>
        </div>
    );
}

export default EditRoomView;
