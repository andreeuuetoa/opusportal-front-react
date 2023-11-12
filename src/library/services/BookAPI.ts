import {BaseEntityAPI} from "../../common/services/BaseEntityAPI";
import {IBook} from "../DTO/IBook";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class BookAPI extends BaseEntityAPI<IBook> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('Books', setJWTResponse);
    }
}
