import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {IBook} from "../DTO/IBook";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class BookAPI extends BaseEntityAPI<IBook> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('books', setJWTResponse);
    }
}
