import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {RoomData} from "../DTO/RoomData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class RoomAPI extends BaseEntityAPI<RoomData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('rooms', setJWTResponse);
    }

    async updateRoom(roomId: string, newRoomValues: RoomData) {
        try {
            const response = await this.axios.put<JWTResponse>('EditRoom/' + roomId, newRoomValues);

            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }
}
