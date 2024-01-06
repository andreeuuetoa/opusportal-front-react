import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {UserData} from "../DTO/UserData";
import {JWTResponse} from "../DTO/JWTResponse";

export class UserAPI extends BaseEntityAPI<UserData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('identity/account/', setJWTResponse);
    }
}
