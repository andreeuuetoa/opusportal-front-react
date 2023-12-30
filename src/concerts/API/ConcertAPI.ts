import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {ConcertData} from "../DTO/ConcertData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class ConcertAPI extends BaseEntityAPI<ConcertData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('concerts', setJWTResponse);
    }
}
