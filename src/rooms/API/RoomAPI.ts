import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {RoomData} from "../DTO/RoomData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class RoomAPI extends BaseEntityAPI<RoomData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('rooms', setJWTResponse);
    }
}
