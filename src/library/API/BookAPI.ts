import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {BookData} from "../DTO/BookData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class BookAPI extends BaseEntityAPI<BookData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('books', setJWTResponse);
    }
}
