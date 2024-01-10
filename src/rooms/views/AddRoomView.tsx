import {IPostRoomProps} from "../domain/IPostRoomProps";
import {FormPart} from "../../common/viewparts/FormPart";
import RoomNumberValues from "../components/RoomNumberValues";

const AddRoomView = (roomProps: IPostRoomProps) => {
    const roomNumberValues = RoomNumberValues(roomProps);

    return (
        <div className="w-50">
            <form id="add-book-form" method="post">
                <h2>Lisa ruum</h2>
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
                    Lisa ruum
                </button>
            </form>
        </div>
    );
}

export default AddRoomView;
