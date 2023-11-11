import {BaseEntityService} from "../../common/services/BaseEntityService";
import {IBook} from "../DTO/IBook";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class BookService extends BaseEntityService<IBook> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('Books', setJWTResponse);
    }
}
