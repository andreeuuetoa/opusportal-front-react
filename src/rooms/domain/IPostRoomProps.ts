import {FormProps} from "../../common/components/form/FormProps";
import {RoomData} from "../DTO/RoomData";

export interface IPostRoomProps extends FormProps {
    roomData: RoomData;
}
