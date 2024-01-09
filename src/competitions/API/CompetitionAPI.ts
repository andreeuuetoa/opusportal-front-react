import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {CompetitionData} from "../DTO/CompetitionData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class CompetitionAPI extends BaseEntityAPI<CompetitionData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('competitions', setJWTResponse);
    }
}
